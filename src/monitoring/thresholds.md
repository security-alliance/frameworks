# Defining Thresholds for On-Chain Monitoring

Setting appropriate thresholds for on-chain monitoring is crucial for detecting unusual activities without generating excessive false positives. Here are some guidelines for defining and configuring thresholds.

## Key Considerations

### Understand Normal Activity Patterns
- **Baseline Metrics**: Establish baseline metrics for normal activities, such as average transaction volumes and typical token minting rates (if any).
- **Historical Data**: Use historical data to understand activity patterns and identify deviations from the norm.

### Set Thresholds for Alerts
- **Large Fund Transfers**: Define thresholds for large fund transfers from project wallets, considering both absolute amounts and relative percentages.
- **Token Minting**: Set thresholds for token minting events, including the number of tokens minted and the frequency of minting.
- **Contract Changes**: Establish thresholds for changes in contract ownership or significant modifications to contract code.

### Adjust Thresholds Over Time
- **Adaptive Thresholds**: Implement adaptive thresholds that can adjust based on changing activity patterns and emerging threats.
- **Regular Reviews**: Periodically review and update thresholds to ensure they remain relevant and effective.

### Multi-Layered Thresholds
- **Primary and Secondary Thresholds**: Use primary thresholds for critical alerts and secondary thresholds for less urgent notifications.
- **Combination Metrics**: Define thresholds based on a combination of metrics to reduce false positives and improve accuracy.

### Anomaly Detection

It is hard, if not impossible, to predict every type of alert one should setup for their project. As such, implementing an anomaly detection system can be of great value as it will monitor the project and its transactions in real time, and compare it to its previous behavior. If for example it is common that 4% of tokens change owner each day and there's a day with 20% of tokens changing owner in the past 10 minutes, then that could be detected as an anomaly cause for investigation.
