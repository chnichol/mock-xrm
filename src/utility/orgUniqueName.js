import memoize from './memoize';

const orgUniqueName = memoize(async () => {
    let result = await fetch('/tools/systemcustomization/systemCustomization.aspx?pid=05&web=true');
    return result.text().then(data => data.match(/var ORG_UNIQUE_NAME = '([a-zA-Z0-9]*)';/)[1]);
});

export default orgUniqueName;