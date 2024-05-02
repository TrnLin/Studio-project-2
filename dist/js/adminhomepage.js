//Constant declarations for admin homepage
const adminTotalUsers = "";
const adminTotalPosts = "";
const adminTrafficThisMonth = "";
const adminNewUsersThisMonth = "";
const adminAPI = "";

//Retreive data from AdminAPI

async function getTotalUsers(adminAPI){
    try{
        const res = await fetch(adminAPI);
        const data = await res.json();
        return data;
    } catch (error){
        console.log("Fetch error: ", error);
    }

}

//Display total users
document.getElementById(adminTotalUsers).innerHTML = getTotalUsers(adminAPI).totalUsers;

//Display total posts
document.getElementById(adminTotalUsers).innerHTML = getTotalUsers(adminAPI).totalPosts;

//Display traffic this month
document.getElementById(adminTotalUsers).innerHTML = getTotalUsers(adminAPI).thisMonthTraffic;

//Display new users this month
document.getElementById(adminTotalUsers).innerHTML = getTotalUsers(adminAPI).newUsersThisMonth;

