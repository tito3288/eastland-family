export const practice = {
  name: "Eastland Family Dental",
  phoneDisplay: "(816) 795-7007",
  phoneHref: "tel:+18167957007",
  email: "care@eastlandfamilydental.com",
  address: {
    street: "19401 East US Highway 40 Ste. 180",
    cityStateZip: "Independence, MO 64055",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=19401+East+US+Highway+40+Suite+180+Independence+MO+64055",
  hours: [
    { days: "Monday", hours: "7:00 AM–4:30 PM" },
    { days: "Tuesday", hours: "7:00 AM–4:30 PM" },
    { days: "Wednesday", hours: "7:00 AM–4:30 PM" },
    { days: "Thursday", hours: "7:00 AM–4:30 PM" },
    { days: "Friday–Sunday", hours: "Closed" },
  ],
  financing: {
    learnMoreUrl: "https://www.carecredit.com/",
    applyUrl: "https://www.carecredit.com/go/RHD372/",
  },
  billPayUrl: "https://weavebillpay.com/8079d052",
  reviewSites: [
    {
      name: "Google",
      href: "https://www.google.com/search?q=Eastland+Family+Dental+Independence+MO",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/EastlandFamilyDental",
    },
    {
      name: "Yelp",
      href: "https://www.yelp.com/biz/eastland-family-dental-independence",
    },
  ],
} as const;

