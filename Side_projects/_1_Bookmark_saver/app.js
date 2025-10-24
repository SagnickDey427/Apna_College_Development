let addBtn = document.querySelector("#add-bookmark");
let ul = document.querySelector("#bookmark-list");


addBtn.addEventListener("click",()=>{
    //Getting site name and it's url
    let sitename = document.querySelector("#bookmark-name").value;
    let siteurl = document.querySelector("#bookmark-url").value;

    if(sitename === "" || siteurl === ""){
        alert("Please fill in both fields");
        return;
    }
    if(!siteurl.startsWith("http://") && !siteurl.startsWith("https://")){
        alert("Please enter a valid URL starting with http:// or https://");
        return;
    }

    //Save bookamrk to local storage
    saveBookmarkLocalStorage(sitename,siteurl);

    addBookmarkToList(sitename,siteurl);

    //Clearing the input fields
    document.querySelector("#bookmark-name").value = "";
    document.querySelector("#bookmark-url").value = "";

});


ul.addEventListener("click",(e)=>{
    //console.dir(e.target);
    if(e.target.nodeName === "BUTTON"){
        let li = e.target.parentElement;
        let sitename = e.target.previousElementSibling.innerText;
        let siteurl = e.target.previousElementSibling.getAttribute("href");
        removeBookmarkFromStorage(sitename,siteurl);
        li.remove();
    }
});


function addBookmarkToList(sitename,siteurl){
    //Creating new anchor element and setting its attributes
    let newa = document.createElement("a");
    newa.setAttribute("href",siteurl);
    newa.innerText = sitename;
    newa.setAttribute("target","_blank");

    //Create delete button
    let newDelBtn = document.createElement("button");
    newDelBtn.innerText = "Delete";
    newDelBtn.setAttribute("id","delete-bookmark");

    //Creating a new li and adding the info to it
    let newLi = document.createElement("li");
    newLi.append(newa);
    newLi.append(newDelBtn);

    //Adding the li to ul
    ul.append(newLi);

}

function getBookmarksFromLocalStorage(){
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    return bookmarks ? bookmarks : [];
}

function saveBookmarkLocalStorage(name,url){
    let bookmarks = getBookmarksFromLocalStorage();
    bookmarks.push({name:name.trim(),url:url});
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
}

function loadBookmarks(){
    const bookmarks = getBookmarksFromLocalStorage();
    bookmarks.forEach((bookmark)=>{
        addBookmarkToList(bookmark.name,bookmark.url);
    })
}



function removeBookmarkFromStorage(name,url){
    let bookmarks = getBookmarksFromLocalStorage();
    bookmarks = bookmarks.filter((bookmark) => bookmark.name !== name || bookmark.url !== url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}



//Add the existing bookmarks from local storage to the list on page load
document.addEventListener("DOMContentLoaded", loadBookmarks);