function login()
{
    let username = document.getElementById("txtusername").value;
    let password = document.getElementById("txtpassword").value;
    if(username === "" && password === "")
    {
        alert("Enter Valid Username and Password");
    }
    else if(username === "admin" && password === "admin123")
    {
        alert("Login successful!");
    }
    else if(username === "faculty" && password === "faculty123")
    {
        alert("Login successful!");
    }
    else if(username === "student" && password === "student123")
    {
        alert("Login successful!");
    }
    else
    {
        alert("Invalid username or password");
    }
}