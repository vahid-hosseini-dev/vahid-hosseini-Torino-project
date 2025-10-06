import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around mt-10 ">
        <Image
          src="./svg/hambergurMenu.svg"
          alt="hambergur menu"
          width={34}
          height={34}
        />
        <Image
          src="./svg/SignInButton.svg"
          alt="sign in"
          width={34}
          height={34}
        />
      </div>
      {/* <div>
        <Link href="">صفحه اصلی</Link>
        <Link href="">خدمات گردشگری</Link>
        <Link href="">درباره ما</Link>
        <Link href="">تماس با ما</Link>
      </div> */}
    </div>
  );
}

export default NavBar;
