import { window, StatusBarAlignment } from 'vscode'
import { COMMAND_NAME } from './constants'
import getStatusBarText from './helpers/getStatusBarText'

// Taken from the `prettier-vscode` repo.
const PRETTIER_STATUS_BAR_PRIORITY = -1
const TOOLTIP_TEXT = 'Enable/Disable formatting'

const createStatusBarItem = () => {
  const statusBarItem = window.createStatusBarItem(
    StatusBarAlignment.Left
  )

  statusBarItem.command = COMMAND_NAME
  statusBarItem.tooltip = TOOLTIP_TEXT
  statusBarItem.text = getStatusBarText()
  statusBarItem.show()

  return statusBarItem
}

export default createStatusBarItem
