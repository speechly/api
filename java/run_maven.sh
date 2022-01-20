#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${GPG_KEYFILE}" ]]; then
    echo "GPG_KEYFILE must point to a GPG private key file"
    exit 1
fi
if [[ ! -f "${GPG_KEYFILE}" ]]; then
    echo "GPG_KEYFILE must point to a file, is now ${GPG_KEYFILE}"
    exit 1
fi

gpg --batch --import ${GPG_KEYFILE}

mvn  $@
