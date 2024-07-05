import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://avatars.mds.yandex.net/i?id=02bb274422cce7a188c960b5514c09f9cd0ca917-12939708-images-thumbs&n=13' />
      </div>
      <div>
        <div className={classes.ava}>
          <img src='https://avatars.mds.yandex.net/i?id=0849af13fb567ea932f20a75f4f614a81774946f-10995513-images-thumbs&n=13' />
        </div>
        <div className={classes.descriptionBlock}>
          description
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;