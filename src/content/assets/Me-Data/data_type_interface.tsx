// data to unpack for printing content of page.
// In principle, we should just be able to edit this, and it will update the site
// currently, the './data.json' file has the structure of the Data interface implemented here.
// This is done to enforce static type checking for the a file that holds the './data.json' import.
//

export default interface MeData {
    about_section: string,
    courses_section: [string[], string[]],
    goals_section: [string[], string[]],
}