//Constant declarations for admin homepage
const adminTotalUsers = "totalUsers";
const adminTotalPosts = "totalPosts";
const adminTrafficThisMonth = "trafficThisMonth";
const adminNewUsersThisMonth = "newUserThisMonth";
const adminGraphElement = "adminChart";
const adminHomeAPI = "adminChart";

//Retreive data from AdminAPI
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

//Display data on Admin Homepage
(async function () {

  // Await the adminAPICall and then access its data
  //const apiData = await adminAPICall(adminHomeAPI);
  //Pseudo Test Json Data, uncomment the above line to fetch data from API
  apiData = {
    totalUsers: 100000,
    totalPosts: 100000,
    thisMonthTraffic: 100000,
    newUsersThisMonth: 100000,
    graphData: [
      { months: "January 2024", counts: 10 },
      { months: "Febuary 2024", counts: 20 },
      { months: "March 2024", counts: 15 },
      { months: "April 2024", counts: 25 },
      { months: "May 2024", counts: 22 },
      { months: "June 2024", counts: 30 },
      { months: "July 2024", counts: 28 },
      { months: "August 2024", counts: 10 },
      { months: "September 2024", counts: 35 },
      { months: "October 2024", counts: 5 },
      { months: "November 2024", counts: 27 },
      { months: "December 2024", counts: 9 }
    ]
  }

  if (apiData) {
    // Display total users
    document.getElementById(adminTotalUsers).innerHTML = apiData.totalUsers;

    // Display total posts
    document.getElementById(adminTotalPosts).innerHTML = apiData.totalPosts;

    // Display traffic this month
    document.getElementById(adminTrafficThisMonth).innerHTML = apiData.thisMonthTraffic;

    // Display new users this month
    document.getElementById(adminNewUsersThisMonth).innerHTML = apiData.newUsersThisMonth;

    //User count graph
    const graphResData = apiData.graphData;

    if (!graphResData) {
      console.error("Graph data not available");
      return;
    };

    new Chart(document.getElementById(adminGraphElement), {
      type: "line",
      data: {
        labels: graphResData.map((row) => row.months),
        datasets: [
          {
            label: "New users by months",
            data: graphResData.map((row) => row.counts),
          },
        ],
      },
    });
  };
})();