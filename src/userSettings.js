import whoAmI from './utility/executeWhoAmI';
import retrieveMemo from './retrieveMemo';
import cleanGuid from './utility/cleanGuid';

const userSettings = async () => {
    let me = await whoAmI();
    let roles = await retrieveMemo('systemuser', me.UserId, '?$expand=systemuserroles_association($select=name)&$select=systemuserid,fullname');

    return {
        userId: `{${cleanGuid(me.UserId)}}`,
        userName: roles.fullname,
        securityRoles: roles.systemuserroles_association.map(r => r.roleid)
    };
}

export default userSettings;