import { memo } from "react"
import Image from "next/image"

import ArrowDown from '@/images/arrow-down.png'
import ArrowDownWhite from '@/images/arrow-down-white.png'
import Back from '@/images/back.png'
import BackWhite from '@/images/back-white.png'
import Bookmark from '@/images/bookmark.png'
import BookmarkWhite from '@/images/bookmark-white.png'
import BookmarkActive from '@/images/bookmark-active.png'
import BookmarkActiveWhite from '@/images/bookmark-active-white.png'
import Close from '@/images/close.png'
import CloseWhite from '@/images/close-white.png'
import Copy from '@/images/copy.png'
import CopyWhite from '@/images/copy-white.png'
import Location from '@/images/location.png'
import LocationWhite from '@/images/location-white.png'
import OpenBook from '@/images/open-book.png'
import OpenBookWhite from '@/images/open-book-white.png'
import Page from '@/images/page.png'
import PageWhite from '@/images/page-white.png'
import Paper from '@/images/paper.png'
import PaperWhite from '@/images/paper-white.png'
import Play from '@/images/play.png'
import PlayWhite from '@/images/play-white.png'
import Share from '@/images/share.png'
import ShareWhite from '@/images/share-white.png'
import Translate from '@/images/translate.png'
import TranslateWhite from '@/images/translate-white.png'

type IconType = 'arrow' | 'back' | 'bookmark' | 'bookmark-active' | 'close' | 'copy' | 'location' | 'open-book' | 'page' | 'paper' | 'play' | 'share' | 'translate';

const ImageMode = memo(({
  type,
  className
}: {
  type: IconType,
  className?: React.HTMLAttributes<HTMLElement>['className']
}) => {
  let light;
  let dark;
  switch (type) {
    case 'arrow':
      light = ArrowDown
      dark = ArrowDownWhite
      break;
    case 'back':
      light = Back
      dark = BackWhite
      break;
    case 'bookmark':
      light = Bookmark
      dark = BookmarkWhite
      break;
    case 'bookmark-active':
      light = BookmarkActive
      dark = BookmarkActiveWhite
      break;
    case 'close':
      light = Close
      dark = CloseWhite
      break;
    case 'copy':
      light = Copy
      dark = CopyWhite
      break;
    case 'location':
      light = Location
      dark = LocationWhite
      break;
    case 'open-book':
      light = OpenBook
      dark = OpenBookWhite
      break;
    case 'page':
      light = Page
      dark = PageWhite
      break;
    case 'paper':
      light = Paper
      dark = PaperWhite
      break;
    case 'play':
      light = Play
      dark = PlayWhite
      break;
    case 'share':
      light = Share
      dark = ShareWhite
      break;
    case 'translate':
      light = Translate
      dark = TranslateWhite
      break;
    default:
      break;
  }

  return <div className={className}>
    {false && <Image
      src={light}
      alt={`${type}-icon`}
      className={`object-cover`}
    />}
    {dark && <Image
      src={dark}
      alt={`${type}-icon`}
      className={`object-cover`}
    />}
  </div>
})

ImageMode.displayName = "ImageMode";

export default ImageMode