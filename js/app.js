window.onload = () => {

    //Initialize Sidenav
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});

    //Initialize Autocomplete
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
            "Mixchipque": null,
            "Bbq": null,
            "Socholo": null,
            "Hotcube": null,
            "Peecha": null,
            "Momiqu": null,
            "Abeeda": null,
            "Lilly": null,
            "Cancurry": null,
            "Oyileshee": null,
            "MixChoocho": null,
            "Notisha": null,
            "Wishesh": null
        }
    });

    //Initialize Scrollspy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});

    //Initialize Parallax
    const pa = document.querySelectorAll('.parallax');
    M.Parallax.init(pa, {});

    //Initialize MaterialBox
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});
};