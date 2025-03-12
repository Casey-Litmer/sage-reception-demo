
### (currently working on the ci-test branch)


`1` is the package-lock file generated on my main computer

`2` is what is generated on my second computer



The error I get on the second computer attempting to run `npm ci` on the cloned repo is:

```
npm error code EUSAGE
npm error
npm error npm ci can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync. Please update your lock file with npm install 
before continuing.
npm error
npm error Invalid: lock file's yaml@1.10.2 does not satisfy yaml@2.7.0
npm error Missing: yaml@1.10.2 from lock file
npm error Missing: comlink@4.4.2 from lock file
npm error
npm error Clean install a project
```

which is consistent with the manual diff I computed.


There is some difference in environment that is causing this.  Both computers are running the same version of node.js and npm which is strange.  There are some peer dependencies that seem to prefer different versions between both systems and some that have moved or changed structure.


### What works:
The only way I can get it to work on my second computer is by deleting the package-lock on a new build and running `npm i -D` to generate a new one.  I assume this isn't ideal.


If you can send me a generated package-lock I can check if there is any difference between the error I'm getting.  
It should be working fine that way on the ci-test branch.


# Comparing by keys only

## `1` not in `2`

`node_modules/postcss-load-config/node_modules/yaml` :
```
 {   
    'version': '2.7.0',    
    'resolved': 'https://registry.npmjs.org/yaml/-/yaml-2.7.0.tgz',     
    'integrity': 'sha512-+hSoy/QHluxmC9kCIJyL/uyFmLmc+e5CFR5Wa+bpIhIj85LVb9ZH2nVnqrHoSvKogwODv0ClqZkmiSSaIH5LTA==',   
    'license': 'ISC', 
    'bin': {'yaml': 'bin.mjs'}, 
    'engines': {'node': '>= 14'}  
}
```

## `2` not in `1`

`node_modules/comlink` :
```
 {  
    'version': '4.4.2', 
    'resolved': 'https://registry.npmjs.org/comlink/-/comlink-4.4.2.tgz',  
    'integrity': 'sha512-OxGdvBmJuNKSCMO4NTl1L47VRp6xn2wG4F/2hYzB6tiCb709otOxtEYCSvK80PtjODfXXZu8ds+Nw5kVCjqd2g==',   
    'dev': True, 'license': 'Apache-2.0',   
    'peer': True  
}  
```

`node_modules/cosmiconfig/node_modules/yaml` :
```
 {  
    'version': '1.10.2',   
    'resolved': 'https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz',   
    'integrity': 'sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==',   
    'license': 'ISC',   
    'engines': {'node': '>= 6'}  
}  
```



# Comparing by keys and values


## `1` not in `2`

`node_modules/postcss-load-config/node_modules/yaml` :
```
 {  
    'version': '2.7.0',   
    'resolved': 'https://registry.npmjs.org/yaml/-/yaml-2.7.0.tgz',   
    'integrity': 'sha512-+hSoy/QHluxmC9kCIJyL/uyFmLmc+e5CFR5Wa+bpIhIj85LVb9ZH2nVnqrHoSvKogwODv0ClqZkmiSSaIH5LTA==',   
    'license': 'ISC',   
    'bin': {'yaml': 'bin.mjs'},   
    'engines': {'node': '>= 14'}  
}
```

`node_modules/rollup` :
```
 {  
    'version': '4.35.0',   
    'resolved': 'https://registry.npmjs.org/rollup/-/rollup-4.35.0.tgz',   
    'integrity': 'sha512-kg6oI4g+vc41vePJyO6dHt/yl0Rz3Thv0kJeVQ3D1kS3E5XSuKbPc29G4IpT/Kv1KQwgHVcN+HtyS+HYLNSvQg==',   
    'dev': True,   
    'license': 'MIT',   
    'dependencies': {  
        '@types/estree': '1.0.6'  
    },   
    'bin': {  
        'rollup': 'dist/bin/rollup'  
    },   
    'engines': {  
        'node': '>=18.0.0',   
        'npm': '>=8.0.0'  
    },   
    'optionalDependencies': {  
        '@rollup/rollup-android-arm-eabi': '4.35.0',   
        '@rollup/rollup-android-arm64': '4.35.0',   
        '@rollup/rollup-darwin-arm64': '4.35.0',   
        '@rollup/rollup-darwin-x64': '4.35.0',   
        '@rollup/rollup-freebsd-arm64': '4.35.0',   
        '@rollup/rollup-freebsd-x64': '4.35.0',   
        '@rollup/rollup-linux-arm-gnueabihf': '4.35.0',   
        '@rollup/rollup-linux-arm-musleabihf': '4.35.0', 
        '@rollup/rollup-linux-arm64-gnu': '4.35.0',   
        '@rollup/rollup-linux-arm64-musl': '4.35.0',   
        '@rollup/rollup-linux-loongarch64-gnu': '4.35.0',   
        '@rollup/rollup-linux-powerpc64le-gnu': '4.35.0',   
        '@rollup/rollup-linux-riscv64-gnu': '4.35.0',   
        '@rollup/rollup-linux-s390x-gnu': '4.35.0',   
        '@rollup/rollup-linux-x64-gnu': '4.35.0',   
        '@rollup/rollup-linux-x64-musl': '4.35.0',   
        '@rollup/rollup-win32-arm64-msvc': '4.35.0',   
        '@rollup/rollup-win32-ia32-msvc': '4.35.0',   
        '@rollup/rollup-win32-x64-msvc': '4.35.0', 'fsevents': '~2.3.2'  
    }  
}
```

`node_modules/yaml` :
```
 {
    'version': '1.10.2', 
    'resolved': 'https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz', 
    'integrity': 'sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==', 
    'license': 'ISC', 
    'engines': {
        'node': '>= 6'
    }
}
```

## `2` not in `1`

`node_modules/comlink` :
```
 {
    'version': '4.4.2', 
    'resolved': 'https://registry.npmjs.org/comlink/-/comlink-4.4.2.tgz', 
    'integrity': 'sha512-OxGdvBmJuNKSCMO4NTl1L47VRp6xn2wG4F/2hYzB6tiCb709otOxtEYCSvK80PtjODfXXZu8ds+Nw5kVCjqd2g==', 
    'dev': True, 
    'license': 'Apache-2.0', 
    'peer': True
}
```

`node_modules/cosmiconfig/node_modules/yaml` :
```
 {
    'version': '1.10.2', 
    'resolved': 'https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz', 
    'integrity': 'sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==', 
    'license': 'ISC', 
    'engines': {
        'node': '>= 6'
    }
}
```

`node_modules/rollup` :
```
 {
    'version': '4.35.0', 
    'resolved': 'https://registry.npmjs.org/rollup/-/rollup-4.35.0.tgz', 
    'integrity': 'sha512-kg6oI4g+vc41vePJyO6dHt/yl0Rz3Thv0kJeVQ3D1kS3E5XSuKbPc29G4IpT/Kv1KQwgHVcN+HtyS+HYLNSvQg==', 
    'devOptional': True, 
    'license': 'MIT', 
    'dependencies': {'@types/estree': '1.0.6'}, 
    'bin': {
        'rollup': 'dist/bin/rollup'
    }, 
    'engines': {
        'node': '>=18.0.0', 
        'npm': '>=8.0.0'
    }, 
    'optionalDependencies': {
        '@rollup/rollup-android-arm-eabi': '4.35.0', 
        '@rollup/rollup-android-arm64': '4.35.0', 
        '@rollup/rollup-darwin-arm64': '4.35.0', 
        '@rollup/rollup-darwin-x64': '4.35.0', 
        '@rollup/rollup-freebsd-arm64': '4.35.0', 
        '@rollup/rollup-freebsd-x64': '4.35.0', 
        '@rollup/rollup-linux-arm-gnueabihf': '4.35.0', 
        '@rollup/rollup-linux-arm-musleabihf': '4.35.0', 
        '@rollup/rollup-linux-arm64-gnu': '4.35.0', 
        '@rollup/rollup-linux-arm64-musl': '4.35.0', 
        '@rollup/rollup-linux-loongarch64-gnu': '4.35.0', 
        '@rollup/rollup-linux-powerpc64le-gnu': '4.35.0', 
        '@rollup/rollup-linux-riscv64-gnu': '4.35.0', 
        '@rollup/rollup-linux-s390x-gnu': '4.35.0', 
        '@rollup/rollup-linux-x64-gnu': '4.35.0', 
        '@rollup/rollup-linux-x64-musl': '4.35.0', 
        '@rollup/rollup-win32-arm64-msvc': '4.35.0', 
        '@rollup/rollup-win32-ia32-msvc': '4.35.0', 
        '@rollup/rollup-win32-x64-msvc': '4.35.0', 
        'fsevents': '~2.3.2'
    }
}
```

`node_modules/yaml` :
```
 {
    'version': '2.7.0', 
    'resolved': 'https://registry.npmjs.org/yaml/-/yaml-2.7.0.tgz', 
    'integrity': 'sha512-+hSoy/QHluxmC9kCIJyL/uyFmLmc+e5CFR5Wa+bpIhIj85LVb9ZH2nVnqrHoSvKogwODv0ClqZkmiSSaIH5LTA==', 
    'license': 'ISC', 'bin': {'yaml': 'bin.mjs'}, 
    'engines': {
        'node': '>= 14'
    }
}
 ```