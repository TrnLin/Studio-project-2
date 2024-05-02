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
        console.log("Error Occured: ", error);
    }

}

//Display total users
document.getElementById(adminTotalUsers).innerHTML = getTotalUsers(adminAPI).totalUsers;

//Display total posts
document.getElementById(adminTotalPosts).innerHTML = getTotalUsers(adminAPI).totalPosts;

//Display traffic this month
document.getElementById(adminTrafficThisMonth).innerHTML = getTotalUsers(adminAPI).thisMonthTraffic;

//Display new users this month
document.getElementById(adminNewUsersThisMonth).innerHTML = getTotalUsers(adminAPI).newUsersThisMonth;

//Things need to be done: Api call for the user count graph