export const layoutVars = {
  pageBackground: "--page-background",
  headerHeight: "--header-height",
  headerBackground: "--header-background",
  contentHeight: "--content-height",
  workableWidth: "--workable-width",
  workableHeight: "--workable-height",
  bigGreyBoxWidth: "--big-grey-box-width",
  bigGreyBoxHeight: "--big-grey-box-height",
  bigGreyBoxBackground: "--big-grey-box-background",
};

export function getCssVar(name, element = document.documentElement) {
  return getComputedStyle(element).getPropertyValue(name).trim();
}
