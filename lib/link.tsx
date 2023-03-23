import { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
  href: string;
  prefetch?: boolean;
  replace?: boolean;
  shallow?: boolean;
  openNewWindow?: boolean;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export default function Link({
  children,
  href,
  prefetch = true,
  replace = false,
  shallow = false,
  openNewWindow = true,
  className,
  onMouseEnter,
  onMouseLeave,
  ...props
}: Props) {
  const router = useRouter();
  const { asPath } = router;
  const externalLink =
    href.startsWith("https://") || href.startsWith("http://");

  /* Prefetching */
  useEffect(() => {
    if (prefetch && !externalLink) {
      router.prefetch(href);
    }
  }, [router, href, prefetch, externalLink]);

  /* If href is equal to current route, return children */
  if (asPath == href) return <span {...props}>{children}</span>;

  /* Create custom event on click and dispatch it */
  // @ts-ignore
  const clickHandler = (event) => {
    if (externalLink) return;
    event.preventDefault();
    const linkClickedEvent = new CustomEvent("onLinkClicked", {
      detail: { href: href, replace: replace, shallow: shallow },
    });
    document.dispatchEvent(linkClickedEvent);
  };

  return (
    <a
      {...props}
      href={href}
      onClick={clickHandler}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </a>
  );
}
