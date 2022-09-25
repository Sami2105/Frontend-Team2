// add pages which you want to the array.
// and make the file in the page folder.
import logo from "/images/Logo.png";

export const routes = {
  LOGGED_IN: [
    { name: "Acasă", link: "/" },
    { name: "Despre", link: "/despre" },
    { name: "Informează-te!", link: "/informeaza" },
    { name: "Anunțuri", link: "/anunturi" },
    { name: "Puncte de reciclare", link: "/puncteReciclare" },
    { name: "Raportează probleme", link: "/raporteazaProbleme" },
    { name: "Campanii de reciclare", link: "/campaniiReciclare" },
    // { name: "path name", link: "link url" }, like this
  ],
  LOGGED_OUT: [
    { name: "Acasă", link: "/" },
    { name: "Despre", link: "/despre" },
    { name: "Informează-te!", link: "/informeaza" },
    { name: "Puncte de reciclare", link: "/puncteReciclare" },
    { name: "Campanii de reciclare", link: "/campaniiReciclare" },
    { name: "Logare", link: "/signin" },
  ],
  ARTICLES: [
    {
      photo: "/Logo.png",
      name: "Ce este reciclarea?",
      link: "/primulArticol",
      descriere:
        "În timp ce reciclarea este bună din multe puncte de vedere, scopul final al acesteia este de a-i determina pe oameni să prevină risipa în primul rând.",
    },
    {
      photo: "/Articol1.png",
      name: "Ce este reciclarea?",
      link: "/articolul2",
      descriere:
        "În timp ce reciclarea este bună din multe puncte de vedere, scopul final al acesteia este de a-i determina pe oameni să prevină risipa în primul rând.",
    },
    {
      photo: "/Articol1.png",
      name: "Ce este reciclarea?",
      link: "/articolul3",
      descriere:
        "În timp ce reciclarea este bună din multe puncte de vedere, scopul final al acesteia este de a-i determina pe oameni să prevină risipa în primul rând.",
    },
    {
      photo: "/Articol1.png",
      name: "Ce este reciclarea?",
      link: "/articolul4",
      descriere:
        "În timp ce reciclarea este bună din multe puncte de vedere, scopul final al acesteia este de a-i determina pe oameni să prevină risipa în primul rând.",
    },
    {
      photo: "/logo.png",
      name: "Ce este reciclarea?",
      link: "/articolul5",
      descriere:
        "În timp ce reciclarea este bună din multe puncte de vedere, scopul final al acesteia este de a-i determina pe oameni să prevină risipa în primul rând.",
    },
    {
      photo: "/Articol1.png",
      name: "Ce este reciclarea?",
      link: "/articolul6",
      descriere:
        "În timp ce reciclarea este bună din multe puncte de vedere, scopul final al acesteia este de a-i determina pe oameni să prevină risipa în primul rând.",
    },
    {
      photo: "/Articol1.png",
      name: "Ce este reciclarea?",
      link: "/articolul7",
      descriere:
        "În timp ce reciclarea este bună din multe puncte de vedere, scopul final al acesteia este de a-i determina pe oameni să prevină risipa în primul rând.",
    },
    {
      photo: "/Articol1.png",
      name: "Ce este reciclarea?",
      link: "/articolul8",
      descriere:
        "În timp ce reciclarea este bună din multe puncte de vedere, scopul final al acesteia este de a-i determina pe oameni să prevină risipa în primul rând.",
    },
  ],
};
