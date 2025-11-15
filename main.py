import csv
import yaml
import re
from collections import OrderedDict
from openai import OpenAI
import time

client = OpenAI()

# ---- Config ----
MODEL = "gpt-5-nano"  # or "gpt-5-nano" if available
BATCH_SIZE = 15         # how many descriptions per request
SLEEP_BETWEEN_BATCHES = 0.5  # small pause to avoid rate limits
# -----------------

def generate_titles_batch(descriptions):
    """Generate short titles for a batch of control descriptions."""
    joined = "\n".join(f"{i+1}. {d}" for i, d in enumerate(descriptions))
    prompt = (
        "For each numbered control description below, write a concise, professional title "
        "(4-6 words max) summarizing it. Do not modify or paraphrase the description. "
        "Return only a numbered list of titles.\n\n"
        f"{joined}"
    )

    response = client.chat.completions.create(
        model=MODEL,
        messages=[{"role": "user", "content": prompt}],
    )

    text = response.choices[0].message.content.strip()
    lines = [line.strip() for line in text.split("\n") if line.strip()]
    titles = []
    for i, line in enumerate(lines):
        # Try to remove leading numbering or punctuation
        title = re.sub(r"^\d+[\.\)\-:]*\s*", "", line).strip()
        titles.append(title)
    return titles


def csv_to_yaml(input_path, output_path, add_titles=False):
    sections = OrderedDict()
    current_section = None
    section_counter = 0
    all_controls = []  # for batching

    with open(input_path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            section_raw = (row.get("Section") or "").strip()
            control_id = (row.get("Control ID") or "").strip()
            question = ''.join((row.get("Question") or "").strip().splitlines())

            if not section_raw:
                continue

            # Detect new section header like "Section 1 - Team Structure, Roles & Responsibilities"
            if " - " in section_raw and not control_id and not question:
                section_counter += 1
                parts = section_raw.split(" - ", 1)
                section_title = parts[1].strip() if len(parts) > 1 else section_raw
                current_section = f"section-{section_counter}"
                sections[current_section] = {"title": section_title, "controls": []}
                continue

            if current_section is None:
                continue

            if control_id and question:
                clean_q = re.sub(r"\s+", " ", question.strip())
                control = {"id": control_id, "description": clean_q}
                sections[current_section]["controls"].append(control)
                all_controls.append(control)

    # Add titles in batches
    if add_titles:
        print(f"🧠 Generating titles in batches of {BATCH_SIZE}...")
        for i in range(0, len(all_controls), BATCH_SIZE):
            batch = all_controls[i:i+BATCH_SIZE]
            titles = generate_titles_batch([c["description"] for c in batch])
            for control, title in zip(batch, titles):
                control["title"] = title
            print(f"  Added titles for {i+1}-{i+len(batch)}")
            time.sleep(SLEEP_BETWEEN_BATCHES)

    cert = [{"id": sid, "title": data["title"], "controls": data["controls"]} for sid, data in sections.items()]
    yaml_data = {"cert": cert}

    with open(output_path, "w", encoding="utf-8") as f:
        yaml.dump(yaml_data, f, sort_keys=False, allow_unicode=True, width=90)

    print(f"✅ Converted {input_path} → {output_path}")
    if add_titles:
        print("✅ Titles added via batched OpenAI calls.")

if __name__ == "__main__":
    csv_to_yaml("input.csv", "output_with_titles.yaml", add_titles=True)
