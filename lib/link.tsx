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

// This component is a replacement for the default next/link component. It is used with 
// lib/customAnimatePresence.tsx to animate page transitions because using the default
// next/link component removed the scss styles from the page before exit animation finished.
// This issue and solution is described more in this issue: 
// https://github.com/vercel/next.js/discussions/18724#discussioncomment-4421594
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
  if (asPath == href) return <span className={className} {...props}>{children}</span>;

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
