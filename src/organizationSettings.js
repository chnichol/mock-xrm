import orgUniqueName from './utility/orgUniqueName';

const organizationSettings = async () => {
    let orgName = await orgUniqueName();

    return {
        uniqueName: orgName
    };
}

export default organizationSettings;