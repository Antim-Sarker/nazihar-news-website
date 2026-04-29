
type NewsItem = {
  title: string;
  category: string;
  date: string;
  img?: string;
};

const topNews: NewsItem[] = [
  {
    title: "Brazil–Ecuador Preview: Dunga men on road to redemption",
    category: "Sport",
    date: "May 7, 2019",
    img: "/sports/sports2.jpg",
  },
  {
    title: "Three players Arsenal almost signed this summer",
    category: "Sport",
    date: "May 7, 2019",
    img: "/sports/sports2.jpg",
  },
  {
    title:
      "Hard time ahead for Hodgson as England start Euro qualifying campaign",
    category: "Sport",
    date: "May 7, 2019",
    img: "/sports/sports1.jpg",
  },
];

const bottomNews: NewsItem[] = [
  {
    title:
      "Scotland and Germany play rock-paper-scissors during Euro 16 qualifier",
    category: "Sport",
    date: "May 7, 2019",
    img: "/sports/sports2.jpg",
  },
  {
    title:
      "Baldini under pressure as Spurs turn to Jonas after missing out",
    category: "Sport",
    date: "May 7, 2019",
    img: "/sports/sports1.jpg",
  },
  {
    title:
      "Romania, defeated by France 3-2, fails to qualify for Fed Cup final",
    category: "Sport",
    date: "May 7, 2019",
  },
  {
    title:
      "Scoop 6 pool expected to swell beyond £3m after 10 winners",
    category: "Sport",
    date: "April 12, 2019",
  },
];

const Sports = () => {
  return (
    <div className="bg-white px-4 md:px-10 py-8">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-6">Sport News</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-3">
          {/* Top 3 News */}
          <div className="grid md:grid-cols-3 gap-6">
            {topNews.map((item, i) => (
              <div key={i}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
                <p className="text-xs text-gray-500 mt-2">
                  {item.category} | {item.date}
                </p>
                <h3 className="font-semibold mt-1 leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t my-6"></div>

          {/* Bottom News */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomNews.map((item, i) => (
              <div key={i}>
                <p className="text-xs text-gray-500">
                  {item.category} | {item.date}
                </p>
                <h4 className="font-medium mt-1 leading-snug">
                  {item.title}
                </h4>
                <div className="border-b mt-3"></div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR (Ad) */}
        <div className="hidden lg:block">
          <div className="border p-4 text-center text-gray-500 text-sm">
            <p className="mb-4">- Advertisement -</p>
            <img
              src="/ad.jpg"
              alt="ad"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;