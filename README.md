# CAT COIN, Bitcoin Price Tracker (Dacxi Frontend Technical Test)

```
```

This is my attempt at building a Vue.js frontend for a Dacxi Frontend Technical Test. The test was to build a Vue.js frontend for a Bitcoin price tracker. The test was designed to be a simple, minimalist, and responsive design. 

As requirements I should have used the following technologies:
| Order | Description |
|-|-|  
| Requirement 1 | Create the application using Vue.js; |
| Requirement 2 | Use the CoinGecko API Documentation as a source of both the bitcoin current price and the historical price; |
| Requirement 3 | Responsive design. The application must look good on both small and big screens; |
| Requirement 4 | Host the application on your preferred hosting service. Example: Heroku Hosting , How to deploy on github pages and/or Deploying to GitHub Pages ; |
| Bonus 1 | Use Tailwind as css; |
| Bonus 2 | The application also presents the following coin prices: DACXI, ETH, ATOM. For this bonus, the user also must be possible to search the historical price of any of those coins (feature 2); |  
| Bonus 3 | Use CSS animations; |
| Bonus 4 | Automated Tests - Unit Tests (Jest) and/or E2E (Playwright); |

<br>

### The Task

*Create an SPA to show the Bitcoin price. The application must have 2 main features:*

 **Feature 1:** Show the current Bitcoin price in real time. The price must be updated on the screen without needing to refresh the browser.*  

**Feature 2:** The customer can input a date and a time and the application will present the Bitcoin price in the provided date and time.*




<br>
<br>

# Vue Components
## WelcomeHeader Component

The `WelcomeHeader` component is a Vue.js component designed to greet users based on the time of the day and display the current time in hours and minutes. It utilizes Vue 3's Composition API with the `ref` function for reactive data handling.

#### Purpose

The purpose of the `WelcomeHeader` component is to provide a personalized greeting to users depending on the time of the day and to display the current time. This component enhances user experience by offering a warm welcome and providing real-time information about the time.

#### Features

- **Dynamic Greeting Message:** The component dynamically determines the appropriate greeting message based on the current time. It greets users with "Good morning" before noon, "Good afternoon" from noon to 6 PM, and "Good night" thereafter.

- **Real-time Time Display:** It displays the current time in hours and minutes, updating every second to reflect the accurate time.

#### Component Structure

The `WelcomeHeader` component consists of the following elements:

- **Template:** The template defines the structure and layout of the component's UI using HTML with Tailwind CSS classes for styling. It includes elements to display the greeting message and the current time.

- **Script:** The script section contains the JavaScript logic for the component. It utilizes Vue's Composition API (`setup` function) to define reactive data (`hour` and `minute`) and calculate the greeting message based on the current time.

#### Reactive Data Handling

- The `hour` and `minute` variables are defined as reactive references using Vue's `ref` function. They hold the current hour and minute values, respectively.

- A `setInterval` function is used to update the `hour` and `minute` values every second, ensuring that the displayed time is always up to date.

#### Greeting Message Calculation

- Depending on the value of the `hour` variable, the component dynamically determines the appropriate greeting message (`msg`). It updates the message based on whether it's morning, afternoon, or night.

#### Usage

The `WelcomeHeader` component can be easily integrated into Vue.js applications to provide users with a personalized greeting and real-time time display. It enhances user experience and adds a touch of customization to the interface.

## BitcoinTracker Component

The `BitcoinTracker` component is a Vue.js component designed to display real-time information about the current price of Bitcoin (BTC) in USD and its percentage change over the last 24 hours. It fetches data from the CoinGecko API using Axios, a promise-based HTTP client for the browser and Node.js.

#### Purpose

The purpose of the `BitcoinTracker` component is to provide users with up-to-date information on the price of Bitcoin, allowing them to track its value over time. It displays the current price in USD along with the percentage change compared to the price 24 hours ago. This information can be useful for investors, traders, or anyone interested in monitoring the cryptocurrency market.

#### Features

- **Real-time Price Updates:** The component fetches the current price of Bitcoin from the CoinGecko API and updates the displayed price every 30 seconds without requiring a page reload.
  
- **Price Change Percentage:** It calculates and displays the percentage change in the Bitcoin price over the last 24 hours. The percentage change is color-coded to indicate whether it's positive (green arrow), negative (red arrow), or unchanged (gray text).

#### Component Structure

The `BitcoinTracker` component consists of the following elements:

- **Template:** The template defines the structure and layout of the component's UI using HTML with Tailwind CSS classes for styling. It includes elements to display the Bitcoin logo, current price, and price change percentage.

- **Script:** The script section contains the JavaScript logic for the component. It imports Axios for making HTTP requests and defines the component's data, computed properties, methods, and lifecycle hooks.

#### Data Fetching

- The `fetchBitcoinPrice` method asynchronously fetches the current price of Bitcoin from the CoinGecko API using Axios.
  
- Upon successful retrieval of data, it updates the `bitcoinPrice` and `bitcoinPrice24hAgo` data properties, where `bitcoinPrice24hAgo` stores the price from 24 hours ago.

- Error handling is implemented to log any errors encountered during the data fetching process.

#### Lifecycle Hook

- The `mounted` lifecycle hook calls the `fetchBitcoinPrice` method when the component is mounted to the DOM, ensuring that the initial Bitcoin price is fetched and displayed.
  
- It also sets up a timer to fetch the Bitcoin price every 30 seconds to keep the displayed price up to date.

This `BitcoinTracker` component provides a simple and efficient way to monitor the price fluctuations of Bitcoin in real-time within a Vue.js application.

## BitcoinPrice Component

The `BitcoinPrice` component is a Vue.js component designed to fetch and display the historical price of Bitcoin (BTC) based on a selected date. It utilizes Vue.js for data binding and Axios for making HTTP requests to the CoinDesk API.

#### Purpose

The purpose of the `BitcoinPrice` component is to allow users to input a specific date and retrieve the closing price of Bitcoin on that date. It provides a simple interface for users to search for historical Bitcoin prices, enhancing their understanding of Bitcoin's price movements over time.

#### Features

- **Date Selection:** Users can input a date using an HTML input field to specify the desired date for retrieving Bitcoin price data.

- **Price Retrieval:** Upon clicking the "Search Bitcoin Price" button, the component fetches the historical Bitcoin price for the selected date from the CoinDesk API.

- **Result Display:** The retrieved Bitcoin price is displayed in a designated area below the search interface, showing the date and corresponding price in USD.

#### Component Structure

The `BitcoinPrice` component consists of the following elements:

- **Template:** The template defines the structure and layout of the component's UI using HTML with Tailwind CSS classes for styling. It includes elements for date input, search button, and result display.

- **Script:** The script section contains the JavaScript logic for the component. It defines the component's data (`searchDate` and `searchResult`) and methods (`fetchBitcoinPriceByDate` and `showSearchResult`) for fetching and displaying Bitcoin price data.

- **Style:** The style section contains scoped CSS styles to customize the appearance of the component elements, including input fields, buttons, and result containers.

#### Data Handling and HTTP Requests

- The `searchDate` data property holds the selected date input by the user, while `searchResult` stores the retrieved Bitcoin price for that date.

- The `fetchBitcoinPriceByDate` method makes an asynchronous HTTP request to the CoinDesk API using Axios, passing the selected date as a parameter.

- Upon receiving a successful response, the method extracts and stores the Bitcoin price from the API response data.

#### Result Display

- The `showSearchResult` method updates the UI to display the retrieved Bitcoin price along with the corresponding date. It dynamically updates the content of the result container to show the searched date and Bitcoin price in USD.

#### Usage

The `BitcoinPrice` component can be integrated into Vue.js applications to provide users with a convenient way to explore historical Bitcoin price data. It enhances user engagement and facilitates better understanding of Bitcoin's price trends over time.

### GraphHistory Component

<mark style="background-color: #FDE68A; color: #000000;">⚠️ Please note: This component did not function as intended due to issues with API requests that I was unable to resolve in time to complete the project.</mark>

The `GraphHistory` component is a Vue.js component designed to display historical price data of Bitcoin (BTC) using an interactive chart. It utilizes Vue.js for data management and Axios for making HTTP requests to the CoinAPI.

#### Purpose

The purpose of the `GraphHistory` component is to visualize the historical price movement of Bitcoin over a specified period. It offers users insights into Bitcoin's price trends and enables them to analyze past performance.

#### Features

- **Price Data Visualization:** The component fetches historical Bitcoin price data from the CoinAPI and displays it using an interactive chart.

- **Dynamic Time Range Selection:** Users can choose between different time ranges (last 7 days, 15 days, or 30 days) to view Bitcoin price data for specific periods.

#### Component Structure

The `GraphHistory` component comprises the following elements:

- **Template:** The template defines the component's UI structure using HTML with Tailwind CSS classes for styling. It includes elements for the chart display and buttons for selecting the time range.

- **Script:** The script section contains the JavaScript logic for the component. It defines the component's data (`variation` and `chartOptions`) and methods (`fetchBitcoinPriceData`) for fetching and rendering Bitcoin price data.

- **Style:** The style section contains scoped CSS styles to customize the appearance of the component elements, including buttons and containers.

#### Data Handling and HTTP Requests

- The `fetchBitcoinPriceData` method makes an asynchronous HTTP request to the CoinAPI to fetch historical Bitcoin price data for the specified time range.

- It calculates the start and end dates based on the selected time range and constructs the API request accordingly.

- Upon receiving a successful response, the method extracts the Bitcoin price data and updates the chart with the retrieved information.

#### Usage

The `GraphHistory` component can be integrated into Vue.js applications to provide users with a visual representation of Bitcoin's historical price data. Although it encountered issues with API requests, it serves as a foundation for future improvements and enhancements in displaying Bitcoin price trends.