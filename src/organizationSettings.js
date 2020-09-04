import orgUniqueName from './orgUniqueName';

const organizationSettings = async () => {
    let orgName = await orgUniqueName();

    return {
        uniqueName: orgName
    };
}

export default organizationSettings;