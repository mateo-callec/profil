function get_age(dateString)
{ 
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }

    return age;
}

var ageElements = document.querySelectorAll("span.age");

for (let i = 0; i < ageElements.length; i++)
{
    ageElements[i].innerHTML = get_age("2006-06-11T00:00:00");
}

twemoji.parse(document.body);

const emojis = ["😃", "😁", "😅", "😰", "🤩", "😒"];

for (let i = 0; i < emojis.length; i++)
{
    twemoji.parse(emojis[i], {
        callback: (icon, options) => {
            
            // create the image tag
            const img = document.createElement('img');

            // assign the image source
            /*img.src = constructTwemojiURL(icon, options);
            img.alt = "Emoji";*/

            // append the tag to our document body
            document.body.append(img);
        }
    });
}


const mainInformation = document.getElementById("main-information");

var mainInformationText = "Ce site est juste là pour faire joli, il n'y a pas de réels intérêts. ".split('');
mainInformationText.push("<img draggable=\"false\" class=\"emoji\" alt=\"😅\" src=\"https://twemoji.maxcdn.com/v/14.0.2/72x72/1f605.png\">");

mainInformation.innerHTML = null;

const mainInformationCursor = "|";
const mainInformationWriteTimeout = 75;

for (let i = 0; i < mainInformationText.length; i++)
{
    setTimeout(function ()
    {
        mainInformation.innerHTML = mainInformation.innerHTML.substring(0, mainInformation.innerHTML.length - 1) + mainInformationText[i] + mainInformationCursor;
    }, mainInformationWriteTimeout * i);
}

var mainInformationCursorStatus = true;

setTimeout(function ()
{
    setInterval(function ()
    {
        if (mainInformationCursorStatus === true)
        {
            mainInformationCursorStatus = false;
            mainInformation.innerHTML = mainInformation.innerHTML.substring(0, mainInformation.innerHTML.length - 1) + "&nbsp;";
        } else {
            mainInformationCursorStatus = true;
            mainInformation.innerHTML = mainInformation.innerHTML.substring(0, mainInformation.innerHTML.length - "&nbsp;".length) + mainInformationCursor;
        }
    }, 500);
}, mainInformationWriteTimeout * mainInformationText.length);