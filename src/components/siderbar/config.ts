const list = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/"
  },
  {
    label: "LaunchPad",
    icon: "LaunchpadIcon",
    href: "/launchpad",
    items: [
      {
        label: "Pre sales",
        href: "preSale"
      },
      {
        label: "Create sale",
        href: "createSale",
      }
    ]
  },
  {
    label: "Locker",
    icon: "LokerIcon",
    href: "/lock",
    items: [
      {
        label: "Tokens",
        href: "tokens"
      },
      {
        label: "Liquidity",
        href: "liquidity",
      },
      {
        label: "Create Locker",
        href: "createLocker"
      }
    ]
  },
  {
    label: "Create Token",
    icon: "CreateTokenIcon",
    href: "/create"
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "/telegram"
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "/twitter"
  },
  {
    label: "Docs",
    icon: "DocsIcon",
    href: "/docs"
  },
]

export default list