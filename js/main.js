var siteName = document.getElementById("siteName");
var SiteURL = document.getElementById("SiteURL");
var submitBtn = document.getElementById("submitBtn");
var visitBtn = document.getElementById("visitBtn");
var deleteBtn = document.getElementById("deleteBtn");
var siteItem = document.getElementsByClassName("siteItem");
var sitesList = [];

function addWebsite() 
{
  if (siteName != "" && SiteURL != "") {
    var website = 
    {
      name: siteName.value,
      url: SiteURL.value
    };
    sitesList.push(website);
    displayWebsite();
    siteName.value = '';
    SiteURL.value = '';

  } else {

     alert(" Fill These Fields");
  }
}

function displayWebsite() 
{
   var websites = "";
   var h3, a1, a2;

  for (var i = 0; i < sitesList.length; i++)
  {
    h3 = "<h3 class='d-inline-block'>" +sitesList[i].name +"</h3>";
    a1 = "<a id=\"visitBtn\" class=\"btn btn-primary d-inline-block mx-2 openWebsite\"href=\""+sitesList[i].url+"\"target=\"_blank\">Visit</a>";
    a2 = "<button id=\"deleteBtn\" onclick=\"deleteWebsite(this)\"  class='btn btn-danger text-white d-inline-block mx-2'>Delete</button>";
    websites = "<div class='siteItem'>"+ h3 + a1 + a2 +"</div>";
  
  }
  document.getElementById("display").innerHTML += websites;

}


function deleteWebsite (deleteBtn)
{
      deleteBtn.parentElement.style.display = 'none';
  
      var link = deleteBtn.previousElementSibling;
      var url = link.getAttribute('href');
      console.log(url);
      for (var i = 0; i < sitesList.length; i++)
      {
        if (sitesList[i].url == url)
        {
          sitesList.splice(i,1);
        }
      }
}
