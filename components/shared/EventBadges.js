import Link from "next/link";

const CategoryBadge = ({ category, href }) => {
  const badgeColors = {
    dance: "bg-red-500",
    "fine-arts": "bg-blue-500",
    technical: "bg-purple-500",
    cultural: "bg-yellow-500",
    music: "bg-green-500",
    sports: "bg-indigo-500",
    others: "bg-gray-500",
    all: "bg-gray-700",
  };

  const badgeTextColors = {
    dance: "text-white",
    "fine-arts": "text-white",
    technical: "text-white",
    cultural: "text-black",
    music: "text-white",
    sports: "text-white",
    others: "text-white",
    all: "text-white",
  };

  const getCategoryBadgeClasses = (category) => {
    const baseClasses =
      "inline-block px-3 text-sm py-1 rounded-md text-sm font-medium mr-2 mb-2";
    const colorClasses = badgeColors[category] || badgeColors["others"];
    const textColorClasses =
      badgeTextColors[category] || badgeTextColors["others"];
    return `${baseClasses} ${colorClasses} ${textColorClasses}`;
  };

  return (
    <Link href={href}>
      <span className={getCategoryBadgeClasses(category)}>
        {category.toUpperCase()}
      </span>
    </Link>
  );
};

const EventBadges = () => {
  return (
    <div className="mt-16 ml-16">
      <CategoryBadge category="all" href="/events" />
      <CategoryBadge category="Dance" href="/category/dance" />
      <CategoryBadge category="fine-arts" href="/category/fine-arts" />
      <CategoryBadge category="technical" href="/category/technical" />
      <CategoryBadge category="cultural" href="/category/cultural" />
      <CategoryBadge category="music" href="/category/music" />
      <CategoryBadge category="sports" href="/category/sports" />
      <CategoryBadge category="others" href="/category/others" />
    </div>
  );
};

export default EventBadges;
