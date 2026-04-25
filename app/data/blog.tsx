import { JSX } from 'react';
import Image from 'next/image';

export interface BlogPost {
  id: string;
  filename: string;   // shown in tree and tab, e.g. 'learning-pytorch.md'
  title: string;      // shown as <h1> inside the post
  date: string;       // e.g. 'April 23, 2026'
  content: () => JSX.Element;
}

export const BLOG_POSTS: BlogPost[] = [
  {
  id: 'blog-pytorch',
  filename: 'learning-pytorch.md',
  title: 'Learning PyTorch',
  date: 'April 23, 2026',
  content: () => (
    <>
      <h2>Background</h2>
      <p>
        I'm headed to the Chicago Cubs this summer as a software engineering intern. Go Cubs go! While
        I'm there I'd love to get involved with some of the machine learning work, especially anything
        baseball stats related. So I've been doing two things to prep. The first is just getting more
        fluent in baseball analytics. ERA, FIP, WHIP, OPS, wRC+, Stuff+, WAR. A lot of these go deeper
        than the basic box score stats and are what front offices actually care about.
      </p>
      <p>
        The second thing is sharpening my ML fundamentals.
      </p>

      <h2>Where I'm starting from</h2>
      <p>
        I'm not coming in totally fresh. I already had a foundational understanding of machine learning.
        I know how to clean and split data, build a network with input, hidden, and output layers, run
        it through backpropagation, and use an optimizer like Adam to update the weights. But everything
        I'd done before was in TensorFlow, and PyTorch is more of the standard in research-grade ML.
        So I figured before the internship I should get comfortable there too.
      </p>

      <h2>Getting into PyTorch</h2>
      <p>
        I started with this YouTube video which I'd recommend if you're in the same spot:{' '}
        <a href="https://www.youtube.com/watch?v=V_xro1bcAuA&t=2598s" target="_blank" rel="noopener noreferrer">link</a>.
        I haven't finished it yet but a few things have stood out so far.
      </p>
      <p>
        Tensors are the core data structure in PyTorch. They're basically n-dimensional arrays, kind of
        like NumPy arrays but with built-in GPU support and automatic gradient tracking. The thing that
        feels different from TensorFlow is how the computation graph gets built dynamically as you run
        code. That makes debugging a lot more intuitive because you can drop in a print statement
        anywhere and actually see what's happening.
      </p>
      <p>
        Building a model is also pretty clean. You define a class that extends nn.Module, set up your
        layers in __init__, and write your forward pass. The training loop is more explicit than what
        I was used to with TensorFlow's .fit(). You handle the zero_grad, forward pass, loss, and
        backward pass yourself. More boilerplate, but you actually understand what's happening at each
        step.
      </p>

      <h2>What's next</h2>
      <p>
        Once I'm done with the video I want to apply this to something real. There's so much going on
        in baseball that trying to predict something like home runs or ERA from raw stats feels too
        noisy to start with. So I'm thinking of scoping it down. Given a player's recent game stats,
        can I predict how much playtime they'll get in their next game? It's a regression problem,
        the data is grabbable, and it's small enough to actually finish.
      </p>
      <p>
        I'll write a part 2 once I have something built. If you're also trying to learn ML, let's chat!
      </p>
    </>
  ),
},

  {
  id: 'cybersec-journey',
  filename: 'my-cybersec-journey.md',
  title: 'My Cybersecurity Journey',
  date: 'April 12, 2026',
  content: () => (
    <>
      <h2>Why Cybersecurity</h2>
      <p>
        I went to Brew Miami at FIU this semester and got to talk to the CEO of Penti, Sevii, and a few
        other founders in the Cybersecurity space about how AI is changing the game. Those conversations
        got me curious enough to start digging in myself.
      </p>

      <h2>How I started</h2>
      <p>
        I started with PicoCTF, TryHackMe, and HackTheBox to get the fundamentals down. From there I
        picked up Burp Suite which is a great tool for beginners. It allows you to intercept HTTP requests,
        test for XSS (Cross-site scripting), etc.
      </p>
      <p>
        One thing that makes this hard to learn is that there aren't many sites you can legally test on.
        HackTheBox is one of the main ones people use. PicoCTF is great since not only are there plenty of
        challenges with varying difficulty, but you can find step-by-step solutions for almost all of them
        for when you get stuck. I prefer PicoCTF after HackTheBox because I feel like you are forced
        to figure out more things on your own. Below are some of the PicoCTF challenges I got through while
        I was learning. (the grayed out ones are completed).
      </p>
      <Image
        src="/blog_pictures/picoCTFCompleted.png"
        alt="Completed picoCTF challenges"
        width={700}
        height={400}
        quality={100}
        unoptimized
        style={{ width: '70%', height: 'auto', borderRadius: 8, margin: '12px 0' }}
      />

      <h2>What I built</h2>
      <p>
        I took what I learned and built a penetration testing platform that runs passive reconnaissance
        checks against a target domain. The techniques I focused on are header analysis, directory fuzzing,
        subdomain enumeration, and exposed file detection. Since I wanted it to actually be educational
        and not just a scanner, I also built out a techniques page explaining each technique and a tutorial
        page walking through how to use the tool. The scanner itself is in a separate private repo since
        publishing a live scanning tool publicly is a bit sketchy. The public site linked below has the
        techniques and tutorial pages if you want to check it out.
      </p>
      <p>
        Check out the site{' '}
        <a href="https://pentest-playbook.onrender.com/" target="_blank" rel="noopener noreferrer">here</a>
      </p>
      <Image
        src="/blog_pictures/pen_test_techniques.png"
        alt="Techniques page"
        width={700}
        height={400}
        quality={100}
        unoptimized
        style={{ width: '70%', height: 'auto', borderRadius: 8, margin: '12px 0' }}
      />
      
    </>
  ),
},

  {
  id: 'financial-algorithm',
  filename: 'financial-algos.md',
  title: 'Learning about financial algorithms',
  date: 'December 1, 2025',
  content: () => (
    <>
      <h2>SHPE Capital</h2>
      <p>
        This semester I joined a program run through SHPE (the Society of Hispanic Professional Engineers)
        focused on financial modeling and algorithmic trading. The goal was to learn how to build systems that
        can generate trading signals from historical data.
      </p>

      <h2>Starting with the fundamentals</h2>
      <p>
        Before touching any code, we learned how to read and analyze a company's 10-K. It covers everything
        from revenue and expenses to risk factors and business strategy. You have to know how to read these
        before you can build anything on top of price data. Below is a section from NVIDIA's 2025 10-K.
      </p>
      <Image
        src="/blog_pictures/NVIDIA_10K_section.png"
        alt="Item 7 of NVIDIA's 2025 10-K"
        width={700}
        height={400}
        quality={100}
        unoptimized
        style={{ width: '50%', height: 'auto', borderRadius: 8, margin: '12px 0' }}
      />

      <h2>Building the algorithm</h2>
      <p>
        Note: The information below describes the original algorithm. I've since gone back and improved it
        after doing more research into financial indicators. The updates to the algorithm are described under the
        "New Fixes" header.
      </p>
      <p>
        At the end of the program, we were split into teams of three and told to build something using what
        we had learned. I taught myself some of the technical indicators used in quantitative trading, and
        one that stood out was the SMA crossover strategy with an RSI filter.
      </p>
      <p>
        The core idea is that you track two moving averages: a fast one (20-day) and a slow one (50-day). When the
        fast SMA crosses above the slow SMA, it signals upward momentum and a potential buy. When it crosses
        below, that's a sell signal. Simple enough, but naive on its own.
      </p>
      <p>
        That's where the RSI (Relative Strength Index) comes in. RSI measures how overbought or oversold a
        stock is on a scale of 0–100. If the crossover says buy but RSI is already above 70, the stock is
        likely overextended and due for a pullback. The same logic applies on the sell side:
        if RSI is below 30, the stock is probably oversold and about to bounce, so you don't panic sell.
        Adding RSI turns a naive crossover system into something that actually accounts for market conditions.
      </p>

      <h2>New fixes (April 2026)</h2>
      <p>
        The main issues I found with the old algorithm were that signals were rare, and when they did fire,
        they moved 100% of the portfolio at once. The updated version replaces that all-or-nothing logic with
        a three-factor scoring system. It uses the SMA crossover, the RSI to avoid buying overbought
        or selling oversold stocks, and the MACD histogram to anticipate shifts in market momentum.
      </p>

      <h2>What I built</h2>
      <p>
        I put all of this into a full web app. You can plug in any ticker(s), set a date range and starting
        capital, and see how the strategy would have performed. It also allocates more capital toward the
        stocks with better Sharpe ratios instead of splitting evenly across them.
      </p>
      <p>
        The site is live if you want to test it out (it might take a minute to start up):{' '}
        <a href="https://shpe-capital-analysts-demo-group2.onrender.com" target="_blank" rel="noopener noreferrer">here</a>
      </p>
      <Image
        src="/blog_pictures/SHPE_Capital_Site_Thumbnail.png"
        alt="Financial algorithm web app"
        width={700}
        height={400}
        quality={100}
        unoptimized
        style={{ width: '100%', height: 'auto', borderRadius: 8, margin: '12px 0' }}
      />
    </>
  ),
},

  // {
  //   id: 'blog-my-new-post',
  //   filename: 'my-new-post.md',
  //   title: 'My New Post',
  //   date: 'May 1, 2026',
  //   content: () => (
  //     <>
  //       <h2>Section heading</h2>
  //       <p>Write your content here.</p>
  //     </>
  //   ),
  // },
];
