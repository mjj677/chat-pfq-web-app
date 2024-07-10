export const processSentimentCounts = (messages) => {
  const sentimentCounts = { labels: [], positive: [], negative: [] };
  const now = new Date();
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 7);

  messages.forEach((message) => {
    const dateKey = new Date(message.created_at).toISOString().split("T")[0];
    if (
      new Date(message.created_at) >= sevenDaysAgo &&
      new Date(message.created_at) <= now
    ) {
      if (!sentimentCounts.labels.includes(dateKey)) {
        sentimentCounts.labels.push(dateKey);
        sentimentCounts.positive.push(0);
        sentimentCounts.negative.push(0);
      }
      const dateIndex = sentimentCounts.labels.indexOf(dateKey);
      if (message.sentiment === "positive")
        sentimentCounts.positive[dateIndex]++;
      else if (message.sentiment === "negative")
        sentimentCounts.negative[dateIndex]++;
    }
  });

  return sentimentCounts;
};

export const processSentimentByCategory = (messages) => {
  const sentimentByCategory = {};
  messages.forEach((message) => {
    if (message.category) {
      if (!sentimentByCategory[message.category]) {
        sentimentByCategory[message.category] = {
          positive: 0,
          negative: 0,
        };
      }
      sentimentByCategory[message.category][message.sentiment]++;
    }
  });
  return sentimentByCategory;
};

export const processDailyCounts = (messages) => {
  const dailyCounts = {};
  messages.forEach((message) => {
    const dateKey = new Date(message.created_at).toISOString().split("T")[0];
    if (!dailyCounts[dateKey]) {
      dailyCounts[dateKey] = 0;
    }
    dailyCounts[dateKey]++;
  });
  return dailyCounts;
};
