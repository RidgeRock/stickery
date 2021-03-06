# Building a dApp using the Dapplets Project infrastructure
![](https://github.com/RidgeRock/stickery/blob/3a2f360da2ca06f0a91c0d9be32ae79db70ee70c/GitcoinImages/Logo.png)

## About Dapplets Project

Dapplets Project is an open and self-governed Public Good entity that provides web3 technologies on the legacy web. The platform is publicly available to anyone and enables a lot of new augmenting applications, both public good, and commercial.

## Dapplet Idea

*When commenting on social media posts, people often use emojis and stickers. The idea behind the dapplet is to give users an additional opportunity to show their emotional reactions by placing stickers on the priority spots of an individual post instead of posting them in the comments below. By doing so, it is possible for users to compete for the same landing spot on a social media post.*

## Target audience

The target audience of this dapplet is people who take an active part in discussions on social networks, emotional users who like to leave comments.

## Challenge Description

* Create a dapplet that puts stickers on posts using the Dapplets Project infrastructure and place it in the list of dapplets.
* [????] The dapplet should be completely free (or as affordable as possible) for its users. It should also have none or minimal primary paid transaction and gas fees. At the moment DappletsAPI works only with L1 Ethereum and NEAR. During the creation of this dapplet, we’d like to consider the possibility of it working, for example, on Polygon Network. For the testing period and within this version, it is possible to run the dapplet on the Ethereum Testnet.
* Provide a fully functional within this version free use of the dapplet according to the requirements below.

## Notes on the upcoming application architecture

During the development, it is necessary to propose an architecture in which it would be possible to expand and extend the dapplet functionality without affecting the existing code, taking into account the next development roadmap:

* Connection of the user's wallet inside the dapplet, ownership of the dapplet token, use of the token for payment transactions inside the dapplet, exchange.
* Betting-functionality of control points (consecutive placement of bets on the same control point by different people).
* Connection to the Sticker Store.
* Introduction to the system of NFT creation, NFT ownership, consistent change of characteristics (e.g. level) of NFT, NFT sales.

## Need to implement in this version

* Dapplet interface according to Figma design file.
* [????] Drag & Drop stickers from the dapplet interface to control points. If the point is free - placement of the sticker. If the point is taken - a modal window with "Place" and "Cancel" buttons is displayed. The control points should be highlighted when the sticker is lifted from the overlay.
* The size of the placed sticker is static and equal to 100*100px.
* Ability for the user to delete the stickers he has placed.
* The dapplet allows you to place stickers in the control points of a post according to the scheme below, display stickers in these points, and match the address of a particular user with the placed sticker. To do this, we suggest singling out a typical structure of a social network post and defining typical checkpoints for placing stickers.
![](https://github.com/RidgeRock/stickery/blob/3a2f360da2ca06f0a91c0d9be32ae79db70ee70c/GitcoinImages/Points.png "Twitter and Instagram scheme")
The number of checkpoints per post increases proportionally to the size of the post container and its content (so if the post contains only a few lines of text - you can only place 1 control point without worsening the existing UX, however, if it's a Twitter post with text and image you can place 7 checkpoints, if it's an Instagram post with text and image - 11 checkpoints). The calculation of the number of control points must be implemented in the selected function. Stickers cannot change existing page layout because they are overlay elements, so they can extend horizontally up to 20px beyond container boundaries. Vertical limits of sticker positioning correspond to the boundaries of social network controls.
![](https://github.com/RidgeRock/stickery/blob/98bc1c71c7ba859e2ca750744e925afab84aab9b/GitcoinImages/Example.png "Working dapplet example")

## Resources

  [Figma design file](https://www.figma.com/file/OIu6K277H1AfVlTJbBqQm7/Stickery_UI?node-id=0%3A1)

  [Official Dapplets developers support](https://discord.gg/MeccGNcd)
  
  [Dapplets Platform Documentation](https://docs.dapplets.org/docs)
  
  [Dapplet code template](https://github.com/dapplets/dapplet-template)
  
## Submission Requirements

* Functionally working dapplet.
* You can not publish project sources from your name. Project sources will be published on GitHub from our corporate account under MIT licence.

## Judging Criteria

* Functionality and features implemented.
* Design and UX implemented.

## Winner Announcement Date

* Deadline for Submissions: Jan 31, 23:59.
* Judging: Feb 1 - Feb 8.
