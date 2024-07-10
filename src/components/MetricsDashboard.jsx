import { CategoryDistributionChart } from "./charts/CategoryDistributionChart";
import { SentimentByCategoryChart } from "./charts/SentimentByCategory";
import { MessageVolumeChart } from "./charts/MessageVolumeChart";
import { SentimentOverTimeChart } from "./charts/SentimentOverTimeChart";
import { UserDoughnutChart } from "./charts/UserDoughnutChart";
import {
  processSentimentCounts,
  processSentimentByCategory,
  processDailyCounts,
} from "../utils/chartDataProcessers";
import "../MetricsDashboard.css";
import { MetricsHeader } from "./MetricsHeader";
import { MetricsView } from "../Views/MetricsView";

export const MetricsDashboard = ({ allMessages, totalUsers }) => {
  const sentimentCounts = processSentimentCounts(allMessages);
  const sentimentByCategory = processSentimentByCategory(allMessages);
  const dailyCounts = processDailyCounts(allMessages);

  return (
    <div id='metrics-container'>
      <MetricsHeader totalUsers={totalUsers}/>
      <MetricsView sentimentCounts={sentimentCounts} sentimentByCategory={sentimentByCategory} dailyCounts={dailyCounts} allMessages={allMessages}/>
    </div>    
  );
};