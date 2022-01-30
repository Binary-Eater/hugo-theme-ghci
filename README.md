# Hugo Theme: GHCi
GHCi-like theme with selectable color schemes. [![Built with
Spacemacs](https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg)](https://develop.spacemacs.org)

Credits to [hugo-theme-shell](https://github.com/Yukuro/hugo-theme-shell) that
this project is forked from and its author,
[@Yukuro](https://github.com/Yukuro).

![Demo](https://raw.githubusercontent.com/Binary-Eater/hugo-theme-ghci/trunk/images/hugo_theme_ghci_demo.gif)

## Demo site
- https://binary-eater.github.io/hugo-theme-ghci

## Features
- GHCi-like portfolio
- Selectable color schemes
  - Built-in themes
    - `Haskell`
    ![Haskell](https://raw.githubusercontent.com/Binary-Eater/hugo-theme-ghci/trunk/images/tn.png)

    - `prompt-powershell`
    ![prompt-powershell](https://raw.githubusercontent.com/Binary-Eater/hugo-theme-ghci/trunk/images/powershell.png)

    - `prompt-ubuntu`
    ![prompt-ubuntu](https://raw.githubusercontent.com/Binary-Eater/hugo-theme-ghci/trunk/images/ubuntu.png)

    - `prompt-retro`
    ![prompt-retro](https://raw.githubusercontent.com/Binary-Eater/hugo-theme-ghci/trunk/images/retro.png)

    - `prompt-white`
    ![prompt-white](https://raw.githubusercontent.com/Binary-Eater/hugo-theme-ghci/trunk/images/white.png)

  - [Mayccoll/Gogh](https://github.com/Mayccoll/Gogh) themes (an example listed below)
    - `Molokai`
    ![Molokai](https://raw.githubusercontent.com/Binary-Eater/hugo-theme-ghci/trunk/images/molokai.png)

- Minimal design
- Responsive
- [MathJax](https://www.mathjax.org/): Beautiful and accessible math in all browsers

## Requirements
- Hugo Version 0.85.0 or higher
    - **Hugo extended version is required**.

## Installation
### Create a new website from scratch
```bash
hugo new site myportfolio
cd myportfolio
git init
git submodule add https://github.com/Binary-Eater/hugo-theme-ghci.git themes/hugo-theme-ghci
hugo server -t hugo-theme-ghci -w -D
```

### Apply to an existing site
```bash
cd myportfolio
git submodule add https://github.com/Binary-Eater/hugo-theme-ghci.git themes/hugo-theme-ghci
hugo server -t hugo-theme-ghci -w -D
```

### How to use theme
`hugo-theme-ghci` supports the [Mayccoll/Gogh](https://github.com/Mayccoll/Gogh) theme
1. Choose a Goph theme : you can choose a theme [here](https://mayccoll.github.io/Gogh/).
2. Copy the name of the theme you selected
3. Configure your config.toml as follows
    ```toml
     [Params.Prompt]
     scheme = "THEME_NAME"
   ```

## Configuration
in [config.toml](https://raw.githubusercontent.com/Binary-Eater/hugo-theme-ghci/trunk/config/_default/config.toml)

```toml
[Params]
# Note: This is for the meta description, which is different from the
# "description" displayed in the prompt.
description = "Kevin Hammond's Portfolio!"
  [Params.Prompt]
  # Note: color scheme
  # Note: You can choose between
  # Note: hugo-theme-ghci original: ["Haskell"]
  # Note: hugo-theme-ghci built-in (inherited from hugo-theme-shell):
  #           ["prompt-powershell", "prompt-ubuntu", "prompt-retro", "prompt-white"]
  # Note: gogh theme: https://mayccoll.github.io/Gogh/
  scheme = "Haskell"

  # Note: variables for GHCi heading
  # GHCi, version [ghcVersion]: [ghcURL]  :? for help
  ghcVersion = "9.0.2"
  ghcURL = "https://www.haskell.org/ghc/"

  # Note: speed at which text is displayed on the prompt
  # Note: if set to 0, typing animation will be disabled
  # Note:
  # Note: if you want to enable Mathjax, you need to set it to 0
  # Note: and set "math: true" at front matter in your Markdown or Org file
  headingDelay = 0 # GHCi heading speed : GHCi, version [ghcVersion]: [ghcURL]  :? for help
  promptDelay = 0 # prompt speed : ghci>, |
  stdoutDelay = 0 # stdout speed : [description] , files in Params.Tree
  codeDelay = 50 # code speed : myStringTransform :: String -> String

  # Note: speed at which text is displayed on the activity pages
  # Note: if set to 0, typing animation will be disabled
  # Note: 
  # Note: if you want to enable Mathjax, you need to set it to 0
  # Note: and set "math: true" at front matter in your Markdown file
  titleDelay = 0 # title speed : "title" in front matter
  contentDelay = 0 # content speed : content in .md file

  # Note: variables that control timing with regards to dynamic scrolling as the
  # prompt is updated
  # Note: these variables should not need to be tuned most likely (in-place due
  # to poor dynamic scrolling implementation due to limitations of more ideal
  # functionality like scrollIntoView + dynamically rendered elements)
  #
  # Note: units are in milliseconds
  #
  # Note: a FIXME comment is in place for this functionality. Once fixed, these
  # variables will be deprecated.
  scrollDownUpdateInterval = 50 # Controls the interval duration between scroll to bottom calls
  scrollDownTimeoutAfterTypeEffect = 500 # Controls time after typing effect is done to cancel subsequent scroll down calls

  [Params.Package] 
  # Note: controls properties related to the Haskell "module" that contains
  # functions with information about the site and profile
  importPackage = "Site" # module name
  importQualified = false # whether module should be a qualified import

  [Params.Profile]
  # Note: in output
  # ghci> [sysInfoFcnName]
  # Login name: [userName]
  # Host name: [pcName]
  # ghci> [profileDescriptionFcnName]
  # [description]
  #
  userName = "khammond"
  pcName = "glasgow"
  sysInfoFcnName = "getSystemInfo"
  profileDescriptionFcnName = "getProfileDescription"

  # Note: If you want to use a Markdown or Org file, you can use the following
  # description = "/description.md"
  # Note: and put the description.md in /content/description.md
  description = """
  Hi I am Kevin Hammond!
  Nice to meet you!

  """

    [Params.Profile.Picture]
    use = true
    fcnName = "getProfilePicture"
    # Note: if githubUserName is non-empty, src is ignored
    githubUserName = "haskell"
    src = "" # path/url to image

  [Params.Tree]
  use = true
  fcnName = "getActivity"
  # Note: ["ACTIVITY", "URL or PATH TO YOUR CONTENT FILE"]
  files = [ 
    ["C", "https://www.iso-9899.info/wiki/The_Standard"],
    ["Cmm", "https://gitlab.haskell.org/ghc/ghc/-/wikis/commentary/rts/cmm"],
    ["Haskell", "https://www.haskell.org/"],
    ["Lazy ML", "/posts/some-activity.org"],
  ]
```

## Troubleshooting
- Hugo build fails
  - What is the version of your Hugo?
  - GHCi theme requires Hugo version 0.85.0 or higher and **extended version**
- Post does not show up (return 404 not found)
  - There are two possible causes for this.
    1. Forgot to add `-D` (`--buildDrafts`) as an argument to the hugo command
    2. The front matter of the post's `.md` or `.org` file has "draft: true"
       set.

## Contributing
Contributions are always welcome!
