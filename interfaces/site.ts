export interface SiteLinkItem {
  label: string;
  href: string;
  icon?: string;
  iconAlt?: string;
  description?: string;
}

export interface SiteRoleLinkItem {
  role: string;
  href: string;
  name: string;
  icon?: string;
  iconAlt?: string;
  /** Shown in the expand panel when the role row is clicked. */
  detail?: string;
}

export interface SiteSection<T> {
  label: string;
  items: T[];
}

// Every section is optional: the home page and markdown route render only the
// sections present in _content/site.md, so adding or removing a section there
// just adds or removes it from the page (no code change, no crash).
export interface SiteHome {
  title: string;
  currently?: SiteSection<SiteRoleLinkItem>;
  previously?: SiteSection<SiteRoleLinkItem>;
  projects?: SiteSection<SiteLinkItem>;
  blogs?: { label: string; /** Slugs shown on the home page. Omit to show all. */ featured?: string[] };
  reading?: {
    label: string;
    /** Titles from `_content/reading.md` shown on the home page. Omit to show all. */
    featured?: string[];
    /** @deprecated Prefer `featured` + `_content/reading.md`. Kept for older site.md. */
    items?: SiteLinkItem[];
  };
  oss?: {
    label: string;
    /** Labels from `_content/oss.md` shown on the home page. Omit to show all. */
    featured?: string[];
    /** @deprecated Prefer `featured` + `_content/oss.md`. */
    items?: SiteLinkItem[];
  };
  scratchpad?: { label: string };
  resume?: SiteSection<SiteLinkItem>;
}

export interface SiteUi {
  blogBack: string;
  blogContents: string;
}

export interface SiteContent {
  home: SiteHome;
  ui: SiteUi;
}
