<script>
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname)
    {
        for(tablink of tablinks)
        {
            tablink.classList.remove("active-links");
        }
        for(tabcontent of tabcontents)
        {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-links");
        document.getElementById(tabname).classList.add("active-tab");        

    }
</script>
<script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzgzohQml8Z7ef_y9TZeVFIQ7yBAtHJl2PzZiXkzfYCR10n9NB-b8bsfyoch4r8uTA8/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML ="Message sent Successfully!!!!"
            setTimeout(function()
                {
                    msg.innerHTML=""
                },5000)
                form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
  </script>
