#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

declare -A services=(
  ["@animeapis/crossrefs"]="crossrefs"
  ["@animeapis/grbac"]="grbac"
  ["@animeapis/hub"]="hub"
  ["@animeapis/iam-admin"]="iam/admin"
  ["@animeapis/identity"]="identity"
  ["@animeapis/image"]="image"
  ["@animeapis/knowledge"]="knowledge"
  ["@animeapis/library"]="library"
  ["@animeapis/resourcemanager"]="resourcemanager"
  ["@animeapis/tracker"]="tracker"
  ["@animeapis/vision"]="vision"
  ["@animeapis/webcache"]="webcache"
)

release=($RELEASE)

echo "::set-output name=working-directory::${services[${release[0]}]}"

exit 0