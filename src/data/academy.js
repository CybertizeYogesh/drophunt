export const academyModules = [
  {
    id: '1',
    title: 'How to Setup MetaMask Safely',
    description: 'A step-by-step guide to creating your first Web3 wallet with proper security practices and recovery phrase management.',
    difficulty: 'Beginner',
    readTime: '5 min read',
    category: 'Security',
    content: [
      { type: 'paragraph', text: 'MetaMask is the most popular crypto wallet in the world, with over 30 million monthly users. It serves as your gateway to the decentralized web, allowing you to interact with dApps, manage digital assets, and participate in blockchain ecosystems. Setting it up correctly from the start is crucial for your security.' },
      { type: 'heading', text: 'What is a Crypto Wallet?' },
      { type: 'paragraph', text: 'Think of a crypto wallet like a web browser combined with a bank account. However, unlike traditional banking, there is no "Forgot Password" button. There is no customer support to call if you make a mistake. You are 100% in control of your own assets.' },
      { type: 'heading', text: 'The Master Key: Your Secret Recovery Phrase' },
      { type: 'paragraph', text: 'The most confusing concept for Web3 beginners is the "Seed Phrase" (or Recovery Phrase). When you create your wallet, MetaMask will give you 12 random words. This is NOT a password. It is the literal mathematical key to your money.' },
      { type: 'paragraph', text: 'If your computer breaks, you can type those 12 words into a brand new computer, and your wallet will magically restore itself. But, if a scammer gets those 12 words, they can clone your wallet and drain it instantly from across the world.' },
      { type: 'callout', text: 'Critical Security Warning: NEVER share your 12-word phrase with anyone. Not even MetaMask support. Anyone who asks for your seed phrase is a scammer trying to steal your funds.' },
      { type: 'heading', text: 'Step-by-Step Installation' },
      { type: 'paragraph', text: 'First, go to metamask.io and download the official extension for Chrome, Firefox, Brave, or Edge. Be extremely careful about fake websites—there are many phishing sites on Google that look identical to the real one. Always double-check the URL.' },
      { type: 'callout', text: 'Pro Tip: After installation, bookmark the official MetaMask website. In the future, only use your bookmark to prevent accidentally clicking on a fake Google Ad.' },
      { type: 'heading', text: 'The Golden Rules of Web3 Security' },
      { type: 'paragraph', text: 'When MetaMask shows you your 12 words, follow these strict rules to ensure you never get hacked:' },
      { type: 'paragraph', text: '1. Write it on physical paper. Digital files can be hacked; a piece of paper in your drawer cannot.' },
      { type: 'paragraph', text: '2. NEVER take a photo of your phrase with your phone. Phones automatically upload photos to the cloud (like iCloud or Google Photos), where hackers frequently look for them.' },
      { type: 'paragraph', text: '3. Never copy and paste it into a notes app or a text document on your computer.' },
      { type: 'paragraph', text: 'By following these steps, you have successfully created a fortress for your crypto journey. You are now ready to fund your wallet and start hunting airdrops!' }
    ]
  },
  {
    id: '2',
    title: 'What is a Testnet?',
    description: 'Understand the difference between test networks and mainnets. Learn why testnets are essential for airdrop farming.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    category: 'Basics',
    content: [
      { type: 'paragraph', text: 'Before a new blockchain or Web3 application launches to the public, developers need a safe environment to test their code without risking real money. This sandbox environment is called a Testnet.' },
      { type: 'heading', text: 'Testnet vs. Mainnet' },
      { type: 'paragraph', text: 'A "Mainnet" (like Ethereum or Solana) is the live, production blockchain where tokens have real financial value. A "Testnet" (like Sepolia or Goerli) is an exact clone of the Mainnet, but the tokens used on it are completely worthless "play money" designed purely for testing.' },
      { type: 'heading', text: 'How to Get Testnet Tokens' },
      { type: 'paragraph', text: 'Because testnet tokens are worthless, you do not buy them on an exchange. Instead, you get them for free from websites called "Faucets." You simply paste your wallet address into a Faucet, click a button, and it sends you test tokens to play with.' },
      { type: 'callout', text: 'Pro Tip: Never pay real money for a testnet token. If someone on Twitter or Discord offers to sell you "Sepolia ETH," it is a scam. It is meant to be 100% free.' },
      { type: 'heading', text: 'Why do Airdrop Farmers care?' },
      { type: 'paragraph', text: 'When a new network is preparing to launch, they invite regular users to try out their Testnet. By clicking buttons, making fake swaps, and finding bugs, you help stress-test the network. In return, many projects reward these early testers with real tokens when the Mainnet officially launches!' }
    ]
  },
  {
    id: '3',
    title: 'How to Bridge Assets to Layer 2',
    description: 'Master the art of cross-chain bridging. Save gas fees and maximize your DeFi activity across multiple networks.',
    difficulty: 'Intermediate',
    readTime: '8 min read',
    category: 'DeFi',
    content: [
      { type: 'paragraph', text: 'As Ethereum became more popular, it became expensive and slow. To fix this, developers created "Layer 2" networks (like Arbitrum, Optimism, Base, and zkSync) that sit on top of Ethereum, offering lightning-fast and incredibly cheap transactions.' },
      { type: 'heading', text: 'What is a Bridge?' },
      { type: 'paragraph', text: 'Blockchains are like isolated islands. You cannot simply send ETH from the Ethereum mainnet directly to a wallet on Arbitrum using a standard transfer. You must use a "Bridge."' },
      { type: 'paragraph', text: 'Think of a bridge like a currency exchange at an airport. You give the bridge your Mainnet ETH. The bridge locks it in a vault, and then instantly mints an exact copy of that ETH on the Layer 2 island so you can use it there.' },
      { type: 'callout', text: 'Security Warning: Bridges are the most targeted applications by hackers. Always use official, native bridges (like the official Base Bridge or Arbitrum Bridge) when moving large amounts of capital, even if third-party bridges claim to be slightly cheaper.' },
      { type: 'heading', text: 'The Bridging Process' },
      { type: 'paragraph', text: '1. Connect your MetaMask wallet to the bridge interface.\n2. Select your origin network (e.g., Ethereum Mainnet) and destination network (e.g., zkSync Era).\n3. Enter the amount to transfer and click Approve.\n4. Wait for the network to process it. Bridging from Ethereum to a Layer 2 usually takes 5 to 15 minutes. Don\'t panic if it doesn\'t show up in 10 seconds!' }
    ]
  },
  {
    id: '4',
    title: 'Avoiding Wallet Drainer Scams',
    description: 'Protect your funds from malicious dApps, fake airdrops, and phishing attempts. Learn the red flags to watch out for.',
    difficulty: 'Beginner',
    readTime: '6 min read',
    category: 'Security',
    content: [
      { type: 'paragraph', text: 'In Web3, you are your own bank. This gives you ultimate freedom, but it also means there is no fraud department to call if you make a mistake. "Wallet drainers" are the most common way users lose their funds.' },
      { type: 'heading', text: 'How Drainers Exploit FOMO' },
      { type: 'paragraph', text: 'A wallet drainer is a malicious piece of code disguised as a legitimate website. Scammers prey on "FOMO" (Fear Of Missing Out). They will hack a famous Twitter account and post: "SURPRISE AIRDROP! Claim your tokens for the next 60 minutes only!"' },
      { type: 'paragraph', text: 'When you panic, click the link, and connect your wallet, a pop-up appears asking you to sign a transaction to "claim" the tokens.' },
      { type: 'callout', text: 'Critical Concept: Simply connecting your wallet to a website is generally safe. The danger ONLY occurs when you SIGN a transaction or APPROVE a contract in your MetaMask pop-up. Always read what you are signing.' },
      { type: 'heading', text: 'The "SetApprovalForAll" Trap' },
      { type: 'paragraph', text: 'The most common drainer trick asks you to sign a permission called "SetApprovalForAll". If you click confirm, you are legally giving the scammer\'s smart contract the right to withdraw every single NFT and token from your wallet without ever asking your permission again.' },
      { type: 'paragraph', text: 'To protect yourself, install browser security extensions like Pocket Universe or Wallet Guard. These tools act as a firewall, simulating the transaction before you sign it and flashing a giant red warning if the website is trying to steal your assets.' }
    ]
  },
  {
    id: '5',
    title: 'Understanding Tokenomics & Fair Launches',
    description: 'Decode token distribution, vesting schedules, and what makes a project likely to reward early adopters.',
    difficulty: 'Advanced',
    readTime: '10 min read',
    category: 'DeFi',
    content: [
      { type: 'paragraph', text: 'Not all airdrops are created equal. Some will make you thousands of dollars, while others are barely worth the gas fees it cost to farm them. The difference almost always comes down to "Tokenomics" (the economics of the token).' },
      { type: 'heading', text: 'Vesting and Cliffs' },
      { type: 'paragraph', text: 'When a new crypto project launches, the developers and the Venture Capital (VC) investors do not get all their tokens on day one. If they did, they would sell them all and crash the price.' },
      { type: 'paragraph', text: 'Instead, their tokens are locked behind a "Cliff" (a period where they can sell nothing, usually 6-12 months) followed by "Vesting" (their tokens slowly unlock piece-by-piece over 2 to 4 years).' },
      { type: 'callout', text: 'Pro Tip: A project with a massive amount of tokens explicitly allocated to "Community/Ecosystem Rewards" in their whitepaper, combined with strict VC lockups, is usually a prime target for a highly lucrative airdrop.' },
      { type: 'heading', text: 'The Low Float, High FDV Trap' },
      { type: 'paragraph', text: 'FDV stands for Fully Diluted Valuation. Beware of projects that launch with only 2% or 5% of their total tokens circulating in the market (Low Float). This artificial scarcity pushes the price up temporarily. But as soon as the team\'s massive supply of tokens begins to unlock, the massive inflation crashes the price. Always look for projects that distribute a healthy amount to the community up front.' }
    ]
  },
  {
    id: '6',
    title: 'Gas Optimization Strategies',
    description: 'Learn when to transact, how to batch transactions, and techniques to minimize fees during high network congestion.',
    difficulty: 'Intermediate',
    readTime: '7 min read',
    category: 'Basics',
    content: [
      { type: 'paragraph', text: 'In Web3, nothing is truly free. "Gas fees" are the transaction costs paid to network validators for processing your actions on the blockchain. During bull markets, Ethereum gas fees can spike wildly, making airdrop farming incredibly expensive.' },
      { type: 'heading', text: 'Gas is like Uber Surge Pricing' },
      { type: 'paragraph', text: 'Gas prices are measured in "Gwei" and fluctuate based on network demand. If everyone is trying to launch a coin at the same time, the network gets congested, and fees skyrocket—exactly like Uber surge pricing after a major concert ends.' },
      { type: 'paragraph', text: 'Transacting during peak US business hours (Monday-Friday) is usually the most expensive time. Historically, weekends (specifically early Sunday mornings UTC) offer the quietest network conditions and the lowest gas prices.' },
      { type: 'callout', text: 'Pro Tip: Install a gas tracker browser extension to monitor live Gwei levels in your toolbar. Set a personal target (e.g., "I only farm when gas is under 15 Gwei") and wait for the network to drop below your threshold before executing your routines.' },
      { type: 'heading', text: 'Batching Your Transactions' },
      { type: 'paragraph', text: 'To save money, organize your airdrop farming. Instead of bridging funds on Monday, doing one swap on Wednesday, and adding liquidity on Friday, wait for a low-gas period on Sunday morning and do all three actions back-to-back. This is called batching, and it is the key to maximizing your profit margins.' }
    ]
  }
];