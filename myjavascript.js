
new Ajax.Request("mydata.txt",
{
    method: "get",
    onSuccess: getContentOfFile,
    onFailure: displayUnableMethod
}
);

function getContentOfFile(data) {
  console.log(data);
  document.getElementById("inserthere").innerHTML = data.responseText
    console.log("hello world");
}

function displayUnableMethod() {
  console.log("bad input");
}
