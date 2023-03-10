import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';

export type NavigationItem = {
  id?: string;
  title: string;
  url: string;
  children?: NavigationItem[];
};

export type HeaderLayoutProps = {
  navigation: NavigationItem[];
};

export function HeaderLayout(props: HeaderLayoutProps) {
  return (
    <nav>
      <div className="container flex flex-wrap items-center justify-between py-6">
        <HeaderDesktop {...props} />
        <HeaderMobile {...props} />
      </div>
    </nav>
  );
}
