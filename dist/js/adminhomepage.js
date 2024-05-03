import Chart from 'chart.js/auto';

//Constant declarations for admin homepage
const adminTotalUsers = "";
const adminTotalPosts = "";
const adminTrafficThisMonth = "";
const adminNewUsersThisMonth = "";
const adminGraphElement = '';
const adminHomeAPI = "";

//Retreive data from AdminAPI

async function adminAPICall(adminHomeAPI){
    
    try{
        const res = await fetch(adminHomeAPI);
        const data = await res.json();
        return data;
    } catch (error){
        console.log("Error Occured: ", error);
    }

}

//Display total users
document.getElementById(adminTotalUsers).innerHTML = adminAPICall(adminHomeAPI).totalUsers;

//Display total posts
document.getElementById(adminTotalPosts).innerHTML = adminAPICall(adminHomeAPI).totalPosts;

//Display traffic this month
document.getElementById(adminTrafficThisMonth).innerHTML = adminAPICall(adminHomeAPI).thisMonthTraffic;

//Display new users this month
document.getElementById(adminNewUsersThisMonth).innerHTML = adminAPICall(adminHomeAPI).newUsersThisMonth;

//Things need to be done: Api call for the user count graph
(async function() {
    const data = adminAPICall(adminHomeAPI).graphData;
  
    new Chart(
      document.getElementById(adminGraphElement),
      {
        type: 'line',
        data: {
          labels: data.map(row => row.months),
          datasets: [
            {
              label: 'Users by Months',
              data: data.map(row => row.counts)
            }
          ]
        }
      }
    );
  })();