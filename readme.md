# Simplified Header Bidding System

This project is a simplified implementation of a header bidding system designed to optimize ad revenue for a publisher's website. The solution integrates Prebid.js and supports multiple Supply-Side Platforms (SSPs), real-time bidding, and fallback ads.

---

## **Features**
- Integration of **Prebid.js** for header bidding.
- Support for multiple SSPs (e.g., AppNexus, Pubmatic).
- Responsive ad unit configurations for desktop and mobile.
- Real-time bidding using the **OpenRTB protocol**.
- Dynamic floor pricing mechanism based on ad size and device type.
- Lazy loading of ads for performance optimization.
- Fallback ads displayed when no valid bids are received.
- Error handling and logging for SSP bids.
- Analytics tracking for bid responses, win rates, and latency metrics.

---

## **Technologies Used**
- **HTML5** for webpage structure.
- **CSS3** for styling.
- **JavaScript** for logic and ad functionality.
- **Prebid.js** for header bidding setup.
- **GitHub Actions** for CI/CD integration.

---

## **How It Works**
Ad Initialization:

Prebid.js is configured via prebid.config.js to handle header bidding with multiple SSPs.
Bid Requests:

Bids are requested from configured SSPs when the page loads or when the ad slot is in view (via lazy loading).
Bid Validation and Rendering:

Incoming bids are validated and the highest bid is selected.
If no valid bids are received, a fallback ad is displayed.
Analytics Tracking:

Bid responses and win rates are tracked and logged for analysis.

---

## **Key Scripts**
prebid.config.js
Defines ad units and bidders for the header bidding system.

lazy-loading.js
Optimizes ad loading by requesting bids only when the ad slot is in view.

error-handler.js
Handles cases where no bids are received and displays fallback ads.

ad-analytics.js
Logs bid responses and winning bids for performance tracking.