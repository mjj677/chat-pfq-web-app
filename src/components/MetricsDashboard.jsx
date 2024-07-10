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
import flowchart from "/flowchart.png";

export const MetricsDashboard = ({ allMessages, totalUsers }) => {
  const sentimentCounts = processSentimentCounts(allMessages);
  const sentimentByCategory = processSentimentByCategory(allMessages);
  const dailyCounts = processDailyCounts(allMessages);

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <section className="flowchart-container">
        <img src={flowchart} id="flowchart" />
      </section>
      <section className="charts-container">
        <section className="top-row">
          <div className="chart-item grow">
            <UserDoughnutChart totalUsers={totalUsers} />
            <p className="total-users-text">{totalUsers} users</p>
          </div>
          <div className="about-section">
            <h3>ABOUT chatPFQ</h3>
            <p>
              chatPFQ is a technical demonstration piece, made to showcase our
              ability to create a Full-Stack application using newly-learned
              tech.
            </p>
            <p>
              Our application uses React Native for the customer mobile App and
              React for the admin web portal. We created our own hosted server
              using Express.js and Socket.IO and integrated multiple
              Machine-Learning models that intercept and identify different
              facets of a message.
            </p>
            <p>
              Once classified, all messages are automatically stored in our
              mongoDB database and translated into a clean and useable interface
              for the owner to use.
            </p>
            <p>
              chatPFQ was designed and built by: Liam, Matt, Barry and Jake.
            </p>
          </div>
          <div className="chart-item grow"></div>
          <div className="chart-item grow"></div>
        </section>
        <section className="bottom-row">
          <div className="chart-item left">
            <div className="sentiment-category">
              <SentimentByCategoryChart data={sentimentByCategory} />
            </div>
            <SentimentOverTimeChart data={sentimentCounts} />
          </div>
          <div className="chart-item grow">
            <CategoryDistributionChart messages={allMessages} />
            <MessageVolumeChart data={dailyCounts} />
          </div>
        </section>
      </section>
    </div>
  );
};
