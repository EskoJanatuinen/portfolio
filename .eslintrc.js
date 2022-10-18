module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended", 
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "error",   
        "react/jsx-uses-vars": "error",
        "react/prop-types": "off"
    },
    "globals": {
        "process": true
    }
}
