import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
import { Ui_Sizes } from '../_types/sizes/sizes'

export interface Ui_KbdProps extends HTMLProps<HTMLSpanElement>, Ui_colors, Ui_Sizes {}
