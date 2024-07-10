import "../MetricsDashboard.css";
import { SentimentByCategoryChart } from "../components/charts/SentimentByCategory";
import { CategoryDistributionChart } from "../components/charts/CategoryDistributionChart";
import { SentimentOverTimeChart } from "../components/charts/SentimentOverTimeChart";
import { MessageVolumeChart } from "../components/charts/MessageVolumeChart";

export function MetricsView({ sentimentCounts, sentimentByCategory, dailyCounts, allMessages }) {
    return <>
        <div id='metrics-grid'>
            <div id='category-distribution' className='chart'>
                {/* <h2>Category distribution</h2> */}
                <CategoryDistributionChart messages={allMessages}/>
            </div>
            <div id='feedback-prompt'>
                <h2>📊 Want to see more data? 👀</h2>
                <h3>We're just starting out, so tell us if there's any data you think would really help you.</h3>
                <h3>Get in touch with us by giving us an interview 😊</h3>
            </div>
            <div id='sentiment-by-category' className='chart'>
                {/* <h2>Sentiment by category</h2>  */}
                <SentimentByCategoryChart data={sentimentByCategory}/>  
            </div>
            <div id='sentiment-over-time' className='chart'>
                {/* <h2>Sentiment over time</h2> */}
                <SentimentOverTimeChart data={sentimentCounts}/>
            </div>
            <div id='message-volume' className='chart'>
                {/* <h2>Message volume</h2> */}
                <MessageVolumeChart data={dailyCounts}/>
            </div>
        </div>
    </>
}