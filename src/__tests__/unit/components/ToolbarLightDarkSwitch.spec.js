import ToolbarLightDarkSwitch from 'components/toolbar/ToolbarLightDarkSwitch';
import { TEST_ID_TOOLBAR_LIGHT_DARK_SWITCH_CONTAINER } from 'constants/testIds';
import { fireEvent, screen } from '@testing-library/react';
import { TEST_ID_TOOLBAR_LIGHT_DARK_SWITCH_BUTTON } from 'constants/testIds';
import * as appPlainActions from 'redux/slices/app';
import { spySetTheme } from '__spies__';

describe('ToolbarLightDarkSwitch', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = customRender(<ToolbarLightDarkSwitch />);
    expectMatchSnapshot(container);
    expect(
      screen.getByTestId(TEST_ID_TOOLBAR_LIGHT_DARK_SWITCH_CONTAINER)
    ).toBeInTheDocument();
  });

  it('correctly switches themes', () => {
    spySetTheme();
    customRender(<ToolbarLightDarkSwitch />);
    const switchButton = screen.getByTestId(
      TEST_ID_TOOLBAR_LIGHT_DARK_SWITCH_BUTTON
    );
    fireEvent.click(switchButton);
    expect(appPlainActions.setTheme).toHaveBeenCalled();
  });
});
