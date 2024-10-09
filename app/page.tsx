import Header from "./components/header";
import HouseComponent from "./components/house";
import HousesComponent from "./components/houses";
import MemberComponent from "./components/member";

export default function Home({ searchParams }: { searchParams: { house: string | undefined; member: string | undefined; } }) {
  const member = searchParams.member;
  const house = searchParams.house;
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="col-auto p-2">
          <HousesComponent />
        </div>
        <div className="col-auto p-2">
          <HouseComponent house={house} />
        </div>
        <div className="col-auto p-2">
          <MemberComponent member={member} />
        </div>
      </div>
    </>
  );
}
