// add pages which you want to the array.
// and make the file in the page folder.

export const routes = {
  LOGGED_IN: [
    { name: "Acasă", link: "/" },
    { name: "Despre", link: "/Despre" },
    { name: "Informează-te!", link: "/informeaza" },
    { name: "Anunțuri", link: "/anunturi" },
    { name: "Puncte de reciclare", link: "/puncteReciclare" },
    { name: "Raportează probleme", link: "/raporteazaProbleme" },
    { name: "Campanii de reciclare", link: "/campaniiReciclare" },
    // { name: "path name", link: "link url" }, like this
  ], LOGGED_OUT: [
    { name: "Acasă", link: "/" },
    { name: "Despre", link: "/Despre" },
    { name: "Informează-te!", link: "/informeaza" },
    { name: "Puncte de reciclare", link: "/puncteReciclare" },
    { name: "Campanii de reciclare", link: "/campaniiReciclare" },
    { name: "Logare", link: "/signin" },    
  ]
};
