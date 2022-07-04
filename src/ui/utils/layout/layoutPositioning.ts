/* https://www.figma.com/plugin-docs/api/properties/nodes-layoutpositioning/
 * This property is applicable only for direct children of auto-layout frames.
 * Determines whether a layer's size and position should be dermined by auto-layout settings or manually adjustable
 */
export const layoutPositioning = (val: LayoutMixin['layoutPositioning']) => {
    if (val === 'AUTO') {
        return {}
    }
    return { 'position': 'absolute' }
}