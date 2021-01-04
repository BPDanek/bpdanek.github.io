// data to unpack for printing content of page.
// In principle, we should just be able to edit this, and it will update the site
// These are imported in the controllers (ex: MeController.tsx) and assigned to objects. The objects are
// Then used for populating html elements
// see '~../Me-Data/data.json' for a little more info

export default interface PostsData {
    projects: [string, string]
}