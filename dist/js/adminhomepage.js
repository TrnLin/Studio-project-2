import Chart from 'chart.js/auto';

//Constant declarations for admin homepage
const adminTotalUsers = "";
const adminTotalPosts = "";
const adminTrafficThisMonth = "";
const adminNewUsersThisMonth = "";
const adminGraphElement = '';
const adminHomeAPI = "";

//Retreive data from AdminAPI

(async function() {

    async function adminAPICall(adminHomeAPI) {
        try {
            const res = await fetch(adminHomeAPI);
            const data = await res.json();
            return data;
        } catch (error) {
            console.log("Error Occurred: ", error);
            return null; // return null in case of error
        }
    }

    // Await the adminAPICall and then access its data
    const apiData = await adminAPICall(adminHomeAPI);

    if (apiData) {
        // Display total users
        document.getElementById(adminTotalUsers).innerHTML = apiData.totalUsers;

        // Display total posts
        document.getElementById(adminTotalPosts).innerHTML = apiData.totalPosts;

        // Display traffic this month
        document.getElementById(adminTrafficThisMonth).innerHTML = apiData.thisMonthTraffic;

        // Display new users this month
        document.getElementById(adminNewUsersThisMonth).innerHTML = apiData.newUsersThisMonth;
    }

})();

//User count graph

(async function() {

    const graphAPIResponse = await adminAPICall(adminHomeAPI);
    const graphResData = graphAPIResponse.graphData;

    if (!graphResData) {
        console.error('Graph data not available');
        return;
      }
    
  
    new Chart(
      document.getElementById(adminGraphElement),
      {
        type: 'line',
        data: {
          labels: graphResData.map(row => row.months),
          datasets: [
            {
              label: 'Users by Months',
              data: graphResData.map(row => row.counts)
            }
          ]
        }
      }
    );
  })();

  